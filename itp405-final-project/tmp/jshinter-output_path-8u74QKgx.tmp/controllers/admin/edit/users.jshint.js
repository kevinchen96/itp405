QUnit.module('JSHint - controllers/admin/edit/users.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/admin/edit/users.js should pass jshint.\ncontrollers/admin/edit/users.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/edit/users.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/admin/edit/users.js: line 22, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/admin/edit/users.js: line 37, col 57, Missing semicolon.\n\n4 errors');
});
