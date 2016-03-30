define('itp405-music-ember/tests/routes/artists/artist.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/artists/artist.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/artists/artist.js should pass jshint.\nroutes/artists/artist.js: line 5, col 16, \'$\' is not defined.\n\n1 error');
  });
});