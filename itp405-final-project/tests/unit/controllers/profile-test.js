import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:profile', 'Unit | Controller | profile', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('set current action should set tabs to current events', function(assert) {
  assert.expect(3);

  // get the controller instance
  const ctrl = this.subject();

  ctrl.send('setCurrent');
  
  assert.equal(ctrl.get('current'), true);
  assert.equal(ctrl.get('created'), false);
  assert.equal(ctrl.get('past'), false);

});
