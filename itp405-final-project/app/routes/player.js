import Ember from 'ember';

export default Ember.Route.extend({
model(params) {
	var mod = this;
    return this.store.findRecord('user', params.user_id).then(function(response){
    	mod.controllerFor('player').set('model', response);
    	mod.transitionTo('player', params.user_id);
    }, function(response){

      mod.controllerFor('player').set('error', response.errors);
      mod.transitionTo('player');
    });;
  },
  // action: {
  //   error: function(error){
  //   	console.log("error");
  //     this.controllerFor('player').set('error', error);
  //     this.transitionTo('player');
  //   } 
  // }
});

