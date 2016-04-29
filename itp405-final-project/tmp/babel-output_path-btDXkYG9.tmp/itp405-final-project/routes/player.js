define('itp405-final-project/routes/player', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('user', params.user_id);
        }
    });
});