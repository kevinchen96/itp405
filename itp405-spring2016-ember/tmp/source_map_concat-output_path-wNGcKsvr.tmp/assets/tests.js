define('itp405-music-ember/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('itp405-music-ember/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('itp405-music-ember/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('itp405-music-ember/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'itp405-music-ember/tests/helpers/start-app', 'itp405-music-ember/tests/helpers/destroy-app'], function (exports, _qunit, _itp405MusicEmberTestsHelpersStartApp, _itp405MusicEmberTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _itp405MusicEmberTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _itp405MusicEmberTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('itp405-music-ember/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('itp405-music-ember/tests/helpers/resolver', ['exports', 'itp405-music-ember/resolver', 'itp405-music-ember/config/environment'], function (exports, _itp405MusicEmberResolver, _itp405MusicEmberConfigEnvironment) {

  var resolver = _itp405MusicEmberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _itp405MusicEmberConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _itp405MusicEmberConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('itp405-music-ember/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
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
define('itp405-music-ember/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('itp405-music-ember/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('itp405-music-ember/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('itp405-music-ember/tests/routes/artists/artist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/artists/artist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists/artist.js should pass jshint.\nroutes/artists/artist.js: line 5, col 16, \'$\' is not defined.\n\n1 error');
  });
});
define('itp405-music-ember/tests/routes/artists.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/artists.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists.js should pass jshint.\nroutes/artists.js: line 5, col 16, \'$\' is not defined.\n\n1 error');
  });
});
define('itp405-music-ember/tests/test-helper', ['exports', 'itp405-music-ember/tests/helpers/resolver', 'ember-qunit'], function (exports, _itp405MusicEmberTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_itp405MusicEmberTestsHelpersResolver['default']);
});
define('itp405-music-ember/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('itp405-music-ember/tests/unit/routes/artists/artist-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:artists/artist', 'Unit | Route | artists/artist', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp405-music-ember/tests/unit/routes/artists/artist-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/artists/artist-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/artists/artist-test.js should pass jshint.');
  });
});
define('itp405-music-ember/tests/unit/routes/artists-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:artists', 'Unit | Route | artists', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('itp405-music-ember/tests/unit/routes/artists-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/routes/artists-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/artists-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('itp405-music-ember/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map