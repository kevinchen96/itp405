define('itp405-final-project/controllers/admin/users', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		isAdmin: _ember['default'].computed(function () {
			var mod = this;
			$.ajax({
				type: 'GET',
				url: '/api/admin/user'
			}).then(function (response) {
				console.log(response);
				mod.set('isAdmin', true);
			}, function (response) {
				mod.set('message', response.responseJSON.message);
				mod.set('isAdmin', false);
			});
		}),
		actions: {
			deleteUser: function deleteUser(id) {
				var confirmation = confirm('Are you sure?');

				if (confirmation) {
					$.ajax({
						type: 'DELETE',
						url: '/api/admin/users/' + id
					}).then(function (response) {
						console.log(response);
						window.location.reload();
					});
				}
			}
		}
	});
});