define('itp405-final-project/tests/helpers/resolver', ['exports', 'itp405-final-project/resolver', 'itp405-final-project/config/environment'], function (exports, _itp405FinalProjectResolver, _itp405FinalProjectConfigEnvironment) {

  var resolver = _itp405FinalProjectResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp405FinalProjectConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp405FinalProjectConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});