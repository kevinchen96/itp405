define('itp405-music-ember/routes/artists/artist', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model(params) {
			return $.getJSON('http://itp-api.herokuapp.com/artists/' + params.id);
		}
	});
});