define('itp405-final-project/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'itp405-final-project/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _itp405FinalProjectConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_itp405FinalProjectConfigEnvironment['default'].APP.name, _itp405FinalProjectConfigEnvironment['default'].APP.version)
  };
});