define('itp405-music-ember/tests/helpers/resolver', ['exports', 'itp405-music-ember/resolver', 'itp405-music-ember/config/environment'], function (exports, _itp405MusicEmberResolver, _itp405MusicEmberConfigEnvironment) {

  var resolver = _itp405MusicEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp405MusicEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp405MusicEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});