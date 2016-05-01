define('itp405-final-project/tests/routes/create-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/create-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/create-event.js should pass jshint.\nroutes/create-event.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/create-event.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});