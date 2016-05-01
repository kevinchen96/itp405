import Ember from 'ember';

export default Ember.Controller.extend({
	description: true,
	notOver: true,
	create: function(){	
		console.log(this.get('model.date'));
		var mod = this;
		var id = this.get('model.id');
		$.ajax({
		      type: 'GET',
		      url: '/api/creator/' + id
		 }).then(function(response){
		 	console.log(response);
		 	for(var i = 0; i < response.event.users.length; i++){
		 		if(response.event.users[i].user_event.creator){
		 			mod.set('creator', response.event.users[i]);
		 			break;
		 		}
		 	}
		 	$.ajax({
				type: 'GET',
				url: '/api/me/user_creator/' + mod.get('creator').id
			}).then(function(response){
				if(response.isCreator){
					mod.set('isUser', true);
				}
				else{
					mod.set('isUser', false);			
				}
			});
		 });
	}.observes('model.id'),

	joined: function(){
		var mod = this;
		var id = this.get('model.id');
		$.ajax({
			type: 'GET',
			url: '/api/me/events/joined/' + id,
		}).then(function(response){
			if(response.event.users.length > 0){
				mod.set('isJoined', true);
			}
			else{
				mod.set('isJoined', false);
			}
		});
	}.observes('model.id'),
	date: Ember.computed('model.date', function(){
		var date = new Date();
		var date2 = new Date(this.get('model.date'));
		date2.setTime( date2.getTime() + 86400000 );
 		if(date2.getTime() < date.getTime()){

 			this.set('notOver', false);
 		}
 		else{
 			this.set('notOver', true);
 		}
 		console.log(this.get('notOver'));
		return moment(this.get('model.date')).add('days', 1).format('MMMM Do YYYY');;
	}),
	time: Ember.computed('model.time', function(){
		var x = this.get('model.time');
		console.log(x);
		var result;
		if(x.substring(0,2) == "00"){
			 result = "12:" + x.substring(3,5) + " am";
		}
		else if(x.substring(0,2) == "12"){
			result = x.substring(0,5) + " pm";
		}
		else if(parseInt(x.substring(0,2)) > 12){
			var val = parseInt(x.substring(0,2)) - 12;
			result =  val.toString() + x.substring(2,5) + " pm";
		}
		else{
			result = x.substring(0,5) + " am"
		}
		return result;
	}),
	actions: {
		setDescription(){
			this.set('description', true);
		},
		setCurrent(){
			this.set('description', false);
		},
		joinEvent(){
			var id = this.get('model.id');
			$.ajax({
				type: 'POST',
				url: '/api/me/events/join',
				data: {
					id: id
				}
			}).then(function(response){
				window.location.href = "/profile";
			});
		}

	}
});
