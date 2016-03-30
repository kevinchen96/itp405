define('itp405-music-ember/app', ['exports', 'ember', 'itp405-music-ember/resolver', 'ember-load-initializers', 'itp405-music-ember/config/environment'], function (exports, _ember, _itp405MusicEmberResolver, _emberLoadInitializers, _itp405MusicEmberConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _itp405MusicEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp405MusicEmberConfigEnvironment['default'].podModulePrefix,
    Resolver: _itp405MusicEmberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _itp405MusicEmberConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});