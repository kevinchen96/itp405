define('itp405-final-project/routes/admin/users', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('user');
		},
		actions: {
			deleteUser: function deleteUser(user) {
				var confirmation = confirm('Are you sure?');

				if (confirmation) {
					user.destroyRecord();
				}
			}
		}

	});
});