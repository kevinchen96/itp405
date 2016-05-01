define('itp405-final-project/routes/admin/edit/users', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			var mod = this;
			return this.store.findRecord('user', params.user_id).then(function (response) {
				mod.controllerFor('admin.edit.users').set('model', response);
				mod.transitionTo('admin.edit.users', params.user_id);
			}, function (response) {

				mod.controllerFor('admin.edit.users').set('errors', response.errors);
				mod.transitionTo('admin.edit.users');
			});
		}
	});
});