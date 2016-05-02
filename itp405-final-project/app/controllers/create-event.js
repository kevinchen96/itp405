import Ember from 'ember';

export default Ember.Controller.extend({
	time: "",
	startTime: "",
	mindate: moment(moment()).add('days', 1),
	createEventTest: function(){
		var date;
		if(this.get('mydate')){
			date = this.get('mydate').format('YYYY-MM-DD');
		}
		else{
			date = moment(moment()).add('days', 1).format('YYYY-MM-DD');
		}
		return date;
	},
	actions: {
		timeChanged(){
			var x = this.get('startTime')._d.toTimeString().substring(0,5);
			this.set('time', x);
		},
		createEvent(){
			
			console.log(this.get('mydate'));
			var mod = this;
			var actualtime;
			var date;
			console.log(this.get('mydate'));
			if($(".time-input").hasClass("invalid")||!this.get('time')){
				actualtime = "invalid";
			}
			else{
				actualtime = this.get('time') + ":00";
			}
			if(mod.get('mydate')){
				date = mod.get('mydate').format('YYYY-MM-DD');
			}
			else{
				date = moment(moment()).add('days', 1).format('YYYY-MM-DD');
			}
			console.log(date);
			console.log(actualtime);
			$.ajax({
		      type: 'POST',
		      url: '/api/me/events',
		      data: {
		      	name: mod.get('name'),
		      	date: date,
		      	time: actualtime,
		      	description: mod.get('description'),
		      	address: mod.get('address'),
		      	city: mod.get('city'),
		      	state: mod.get('state'),
		      	zip: mod.get('zip')
		      }
			 }).then(function(response){
			 	window.location.href = "/profile";
			 }, function(response){
			 	mod.set('error', response.responseJSON)
			 });
		},
		cancel(){
			this.transitionToRoute('/profile');
		}
	}
});
