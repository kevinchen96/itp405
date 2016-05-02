import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:register', 'Unit | Controller | register', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('should update emailValid and emailInvalid on email change', function(assert) {
  assert.expect(4);

  // get the controller instance
  const ctrl = this.subject();

  ctrl.set('email', "notavalidemail.com");
  // check the properties before the action is triggered
  assert.equal(ctrl.get('emailValid'), false);
  assert.equal(ctrl.get('emailInvalid'), true);

  // trigger the action on the controller by using the `send` method,
  // passing in any params that our action may be expecting
  ctrl.set('email', "validemail@email.com");

  // finally we assert that our values have been updated
  // by triggering our action.
  assert.equal(ctrl.get('emailValid'), true);
  assert.equal(ctrl.get('emailInvalid'), false);
});