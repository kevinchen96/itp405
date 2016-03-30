define("itp405-music-ember/routes/artists", ["exports", "ember"], function (exports, _ember) {
	exports["default"] = _ember["default"].Route.extend({
		model: function model() {
			return $.getJSON("http://itp-api.herokuapp.com/artists");
		}
	});
});