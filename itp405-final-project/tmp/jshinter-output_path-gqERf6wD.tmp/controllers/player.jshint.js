QUnit.module('JSHint - controllers/player.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/player.js should pass jshint.\ncontrollers/player.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/player.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/player.js: line 71, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/player.js: line 76, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/player.js: line 81, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
});
