define('itp405-music-ember/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'itp405-music-ember/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _itp405MusicEmberConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_itp405MusicEmberConfigEnvironment['default'].APP.name, _itp405MusicEmberConfigEnvironment['default'].APP.version)
  };
});