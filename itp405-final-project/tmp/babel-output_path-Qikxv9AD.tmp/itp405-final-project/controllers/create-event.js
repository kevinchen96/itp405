define("itp405-final-project/controllers/create-event", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Controller.extend({
		time: "",
		startTime: "",
		mindate: moment(moment()).add('days', 1),
		actions: {
			timeChanged: function timeChanged() {
				var x = this.get('startTime')._d.toTimeString().substring(0, 5);
				this.set('time', x);
			},
			createEvent: function createEvent() {
				var mod = this;
				var actualtime;
				var date;
				console.log(this.get('mydate'));
				if ($(".time-input").hasClass("invalid") || !this.get('time')) {
					actualtime = "invalid";
				} else {
					actualtime = this.get('time') + ":00";
				}
				if (mod.get('mydate')) {
					date = mod.get('mydate').format('YYYY-MM-DD');
				} else {
					date = moment(moment()).add('days', 1).format('YYYY-MM-DD');
				}
				console.log(date);
				console.log(actualtime);
				$.ajax({
					type: 'POST',
					url: '/api/me/events',
					data: {
						name: mod.get('name'),
						date: date,
						time: actualtime,
						description: mod.get('description'),
						address: mod.get('address'),
						city: mod.get('city'),
						state: mod.get('state'),
						zip: mod.get('zip')
					}
				}).then(function (response) {
					window.location.href = "/profile";
				});
			},
			cancel: function cancel() {
				this.transitionToRoute('/profile');
			}
		}
	});
});