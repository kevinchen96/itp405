define('itp405-final-project/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'itp405-final-project/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _itp405FinalProjectConfigEnvironment) {

  var name = _itp405FinalProjectConfigEnvironment['default'].APP.name;
  var version = _itp405FinalProjectConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});