define('itp405-final-project/controllers/admin/edit/events', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		time: "",
		startTime: _ember['default'].computed('model.time', function () {
			var hacktime = "2015-01-01 " + this.get('model.time');
			var x = moment(hacktime);
			return x;
		}),
		mydate: _ember['default'].computed('model.date', function () {
			var x = moment(this.get('model.date')).add('days', 1);
			return x;
		}),
		actions: {
			timeChanged: function timeChanged() {
				var x = this.get('startTime')._d.toTimeString().substring(0, 5);
				this.set('time', x);
			},
			editEvent: function editEvent() {
				var mod = this;
				var actualtime;
				var date;
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
				console.log(this.get('model.date'));
				var x = moment(this.get('model.date'));
				console.log(x);
				$.ajax({
					type: 'PUT',
					url: '/api/events/' + mod.get('model.id'),
					data: {
						name: mod.get('model.name'),
						date: date,
						time: actualtime,
						description: mod.get('model.description'),
						address: mod.get('model.address'),
						city: mod.get('model.city'),
						state: mod.get('model.state'),
						zip: mod.get('model.zip')
					}
				}).then(function (response) {
					mod.transitionToRoute('/admin/events');
				});
			},
			cancel: function cancel() {
				this.transitionToRoute('/profile');
			}
		}
	});
});