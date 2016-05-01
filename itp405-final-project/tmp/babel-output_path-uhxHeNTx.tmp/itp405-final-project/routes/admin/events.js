define('itp405-final-project/routes/admin/events', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('event');
		}

	});
});