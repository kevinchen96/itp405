define('itp405-music-ember/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'itp405-music-ember/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _itp405MusicEmberConfigEnvironment) {

  var name = _itp405MusicEmberConfigEnvironment['default'].APP.name;
  var version = _itp405MusicEmberConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});