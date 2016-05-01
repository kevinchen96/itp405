define('itp405-final-project/components/nav-bar', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		query: '',
		filter: _ember['default'].computed(function () {
			if (window.location.pathname == "/results/players") {
				return 'players';
			} else {
				return 'events';
			}
		}),
		isEvent: _ember['default'].computed.equal('filter', 'events'),
		isAdmin: false,
		name: _ember['default'].computed(function () {
			var mod = this;
			$.ajax({
				type: 'GET',
				url: '/api/me'
			}).then(function (response) {
				mod.set('name', response.first_name + ' ' + response.last_name);
				if (response.admin) {
					mod.set('isAdmin', true);
				}
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
			},

			selectFilter: function selectFilter(value) {
				this.set('filter', value);
				console.log(this.get('filter'));
			},
			search: function search() {
				console.log(this.get('filters'));
				var filter = this.get('filter');
				var queries = this.get('query').replace(/ /g, '+');
				// console.log(this.get('query'));
				// console.log(queries);
				if (this.get('filter') == 'events') {
					// var route = 'results.event';
					window.location.href = "/results/events?q=" + queries;
				} else {
					window.location.href = "/results/players?q=" + queries;
				}
				// }
			}

		}
	});
});