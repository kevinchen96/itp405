import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		var mod = this;
	    return this.store.findRecord('event', params.event_id).then(function(response){
	    	mod.controllerFor('admin.edit.events').set('model', response);
	    	mod.transitionTo('admin.edit.events', params.event_id);
	    }, function(response){

	      mod.controllerFor('admin.edit.events').set('errors', response.errors);
	      mod.transitionTo('admin.edit.events');
	    });
  },
});
