QUnit.module('JSHint - controllers/register.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/register.js should pass jshint.\ncontrollers/register.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/register.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/register.js: line 27, col 11, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
