define('itp405-music-ember/tests/helpers/start-app', ['exports', 'ember', 'itp405-music-ember/app', 'itp405-music-ember/config/environment'], function (exports, _ember, _itp405MusicEmberApp, _itp405MusicEmberConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _itp405MusicEmberConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _itp405MusicEmberApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});