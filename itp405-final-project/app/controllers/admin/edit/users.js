import Ember from 'ember';

export default Ember.Controller.extend({
	isAdmin: Ember.computed(function(){
		var mod = this;
		$.ajax({
		      type: 'GET',
		      url: '/api/admin/user'
		 }).then(function(response){
		 	console.log(response);
	 		mod.set('isAdmin', true);
		 }, function(response){
		 		mod.set('message', response.responseJSON.message);
		 		mod.set('isAdmin', false);
		 });
	}),

	emailValid:  Ember.computed.match('model.email', /^.+@.+\..+$/),
	emailInvalid: Ember.computed.not('emailValid'),

	actions: {
		editUser(){
			var mod = this;
			$.ajax({
		      type: 'PUT',
		      url: '/api/admin/users/' + mod.get('model.id'),
		      data: {
		      	first_name: mod.get('model.first_name'),
		      	last_name: mod.get('model.last_name'),
		      	email: mod.get('model.email'),
		      	rating: mod.get('model.rating')
		      }
			 }).then(function(response){
				mod.transitionToRoute('/admin/users');
			 }, function(response){
			 	console.log(response);
			 	mod.set('error', response.responseJSON)
			 });
		}
	}
});
