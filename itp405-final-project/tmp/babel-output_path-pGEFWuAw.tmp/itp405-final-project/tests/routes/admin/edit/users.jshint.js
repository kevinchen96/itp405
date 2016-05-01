define('itp405-final-project/tests/routes/admin/edit/users.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin/edit/users.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/admin/edit/users.js should pass jshint.\nroutes/admin/edit/users.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/admin/edit/users.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});