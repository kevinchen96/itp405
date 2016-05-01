QUnit.module('JSHint - routes/player.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/player.js should pass jshint.\nroutes/player.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/player.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/player.js: line 4, col 1, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n3 errors');
});
