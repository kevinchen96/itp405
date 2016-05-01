define('itp405-final-project/tests/controllers/create-event.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - controllers/create-event.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/create-event.js should pass jshint.\ncontrollers/create-event.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/create-event.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncontrollers/create-event.js: line 8, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/create-event.js: line 12, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncontrollers/create-event.js: line 48, col 9, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n5 errors');
  });
});