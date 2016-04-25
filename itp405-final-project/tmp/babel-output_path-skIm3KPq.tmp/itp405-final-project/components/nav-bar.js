define('itp405-final-project/components/nav-bar', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		name: _ember['default'].computed(function () {
			var mod = this;
			$.ajax({
				type: 'GET',
				url: '/api/me'
			}).then(function (response) {
				mod.set('name', response.first_name + ' ' + response.last_name);
			});
		}),

		loggedIn: _ember['default'].computed.bool('name'),

		actions: {
			logout: function logout() {
				$.ajax({
					url: "/auth/logout",
					type: "POST"
				}).then(function (response) {
					window.location.href = "/";
				});
			}
		}
	});
});