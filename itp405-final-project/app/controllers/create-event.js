import Ember from 'ember';

export default Ember.Controller.extend({
	time: "",
	startTime: "",
	mindate: moment(moment()).add('days', 1),
	actions: {
		timeChanged(){
			var x = this.get('startTime')._d.toTimeString().substring(0,5);
			this.set('time', x);
		},
		createEvent(){
			var mod = this;
			var actualtime;
			var date;
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
			 });
		},
		cancel(){
			this.transitionToRoute('/profile');
		}
	}
});
