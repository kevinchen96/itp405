QUnit.module('JSHint - models/event.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/event.js should pass jshint.\nmodels/event.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/event.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nmodels/event.js: line 4, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n3 errors');
});
