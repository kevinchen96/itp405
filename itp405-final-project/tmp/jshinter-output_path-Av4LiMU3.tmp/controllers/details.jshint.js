QUnit.module('JSHint - controllers/details.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/details.js should pass jshint.\ncontrollers/details.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/details.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/details.js: line 61, col 70, Unreachable \';\' after \'return\'.\ncontrollers/details.js: line 61, col 70, Unnecessary semicolon.\ncontrollers/details.js: line 78, col 46, Missing semicolon.\ncontrollers/details.js: line 83, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/details.js: line 86, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/details.js: line 89, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n8 errors');
});
