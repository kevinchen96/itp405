define('itp405-final-project/initializers/export-application-global', ['exports', 'ember', 'itp405-final-project/config/environment'], function (exports, _ember, _itp405FinalProjectConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_itp405FinalProjectConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _itp405FinalProjectConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_itp405FinalProjectConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});