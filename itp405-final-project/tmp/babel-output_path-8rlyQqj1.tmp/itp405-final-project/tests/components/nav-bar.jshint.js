define('itp405-final-project/tests/components/nav-bar.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components/nav-bar.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/nav-bar.js should pass jshint.\ncomponents/nav-bar.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\ncomponents/nav-bar.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\ncomponents/nav-bar.js: line 21, col 30, \'template literal syntax\' is only available in ES6 (use \'esversion: 6\').\ncomponents/nav-bar.js: line 31, col 11, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/nav-bar.js: line 40, col 11, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\ncomponents/nav-bar.js: line 44, col 11, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\n\n6 errors');
  });
});