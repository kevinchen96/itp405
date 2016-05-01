define('itp405-final-project/routes/details', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      var mod = this;
      return this.store.findRecord('event', params.event_id).then(function (response) {
        mod.controllerFor('details').set('model', response);
        mod.transitionTo('details', params.event_id);
      }, function (response) {

        mod.controllerFor('details').set('error', response.errors);
        mod.transitionTo('details');
      });
    }

  });
});