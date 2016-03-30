define('itp405-music-ember/router', ['exports', 'ember', 'itp405-music-ember/config/environment'], function (exports, _ember, _itp405MusicEmberConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _itp405MusicEmberConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('artists', function () {
      this.route('artist', { path: ':id' });
    });
  });

  exports['default'] = Router;
});