QUnit.module('JSHint - controllers/profile.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/profile.js should pass jshint.\ncontrollers/profile.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/profile.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/profile.js: line 38, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/profile.js: line 43, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/profile.js: line 48, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
});
