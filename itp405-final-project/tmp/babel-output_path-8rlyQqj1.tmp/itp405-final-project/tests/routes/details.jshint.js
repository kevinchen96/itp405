define('itp405-final-project/tests/routes/details.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/details.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/details.js should pass jshint.\nroutes/details.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/details.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/details.js: line 4, col 1, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
  });
});