define('itp405-final-project/controllers/profile', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		current: true,
		created: false,
		past: false,
		currentEvents: [],
		createdEvents: [],
		pastEvents: [],

		user: _ember['default'].computed(function () {
			var mod = this;
			$.ajax({
				type: 'GET',
				url: '/api/me'
			}).then(function (response) {
				console.log(response);
				mod.set('user', response);
				var date = new Date();
				for (var i = 0; i < response.events.length; i++) {
					if (response.events[i].user_event.creator) {
						mod.get('createdEvents').addObject(response.events[i]);
					}
					var date2 = new Date(response.events[i].date);
					date2.setTime(date2.getTime() + 86400000);
					console.log(date2.getTime());
					if (date2.getTime() >= date.getTime()) {
						mod.get('currentEvents').addObject(response.events[i]);
					} else {
						mod.get('pastEvents').addObject(response.events[i]);
					}
				}
			});
		}),

		actions: {
			setCurrent: function setCurrent() {
				this.set('current', true);
				this.set('created', false);
				this.set('past', false);
			},
			setCreated: function setCreated() {
				this.set('current', false);
				this.set('created', true);
				this.set('past', false);
			},
			setPast: function setPast() {
				this.set('current', false);
				this.set('created', false);
				this.set('past', true);
			}
		}
	});
});