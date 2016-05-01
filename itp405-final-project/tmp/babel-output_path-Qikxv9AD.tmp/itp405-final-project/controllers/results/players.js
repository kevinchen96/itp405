define('itp405-final-project/controllers/results/players', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		q: '',
		queryParams: ['q'],
		queries: _ember['default'].computed('q', function () {
			return this.get('q').split(" ");
		}),
		item: _ember['default'].computed('queries', function () {
			var mod = this;
			var data = {
				queries: this.get('queries')
			};
			console.log(data);
			$.ajax({
				type: 'GET',
				url: '/api/query/players',
				data: data
			}).then(function (response) {
				console.log(response);
				mod.set('item', response.user);
			});
		})
	});
});