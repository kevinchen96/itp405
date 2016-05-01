QUnit.module('JSHint - controllers/admin/users.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/admin/users.js should pass jshint.\ncontrollers/admin/users.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/users.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/users.js: line 18, col 10, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/users.js: line 19, col 14, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n4 errors');
});
