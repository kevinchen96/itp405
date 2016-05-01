define('itp405-final-project/controllers/admin/events', ['exports', 'ember'], function (exports, _ember) {
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
			deleteEvent: function deleteEvent(id) {
				var confirmation = confirm('Are you sure?');

				if (confirmation) {
					$.ajax({
						type: 'DELETE',
						url: '/api/admin/events/' + id
					}).then(function (response) {
						window.location.reload();
					});
				}
			}
		}
	});
});