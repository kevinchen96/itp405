define('itp405-final-project/routes/details', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('event', params.event_id);
        }

    });
});