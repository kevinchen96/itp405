import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:results/events', 'Unit | Controller | results/events', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test("should split queries", function(assert) {
  assert.expect(1);

  // get the controller instance
  const ctrl = this.subject();

  ctrl.set('q', "my name i s kevin");

  var x = ['my', 'name', 'i', 's', 'kevin'];
  assert.deepEqual(ctrl.get('queries'), x);
});
