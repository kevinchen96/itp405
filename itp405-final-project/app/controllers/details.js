import Ember from 'ember';

export default Ember.Controller.extend({
	description: true,

	creator: Ember.computed('model.id', function(){
		var mod = this;
		var id = this.get('model.id');
		$.ajax({
		      type: 'GET',
		      url: '/api/creator/' + id
		 }).then(function(response){
		 	console.log(response);
		 	mod.set('creator', `${response.event.users[0].first_name} ${response.event.users[0].last_name}`);
		 });
	}),

	actions: {
		setDescription(){
			this.set('description', true);
		},
		setPlayers(){
			this.set('description', false);
		}
	}
});
