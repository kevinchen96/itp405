define('itp405-final-project/app', ['exports', 'ember', 'itp405-final-project/resolver', 'ember-load-initializers', 'itp405-final-project/config/environment'], function (exports, _ember, _itp405FinalProjectResolver, _emberLoadInitializers, _itp405FinalProjectConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _itp405FinalProjectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp405FinalProjectConfigEnvironment['default'].podModulePrefix,
    Resolver: _itp405FinalProjectResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _itp405FinalProjectConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});