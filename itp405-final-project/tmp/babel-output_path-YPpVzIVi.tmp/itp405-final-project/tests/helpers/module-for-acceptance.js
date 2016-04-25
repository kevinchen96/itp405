define('itp405-final-project/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'itp405-final-project/tests/helpers/start-app', 'itp405-final-project/tests/helpers/destroy-app'], function (exports, _qunit, _itp405FinalProjectTestsHelpersStartApp, _itp405FinalProjectTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _itp405FinalProjectTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _itp405FinalProjectTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});