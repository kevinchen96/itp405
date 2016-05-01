define('itp405-final-project/tests/helpers/start-app', ['exports', 'ember', 'itp405-final-project/app', 'itp405-final-project/config/environment'], function (exports, _ember, _itp405FinalProjectApp, _itp405FinalProjectConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _itp405FinalProjectConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _itp405FinalProjectApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});