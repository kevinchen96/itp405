import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:create-event', 'Unit | Controller | create event', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test("date correct on create event", function(assert) {
  assert.expect(2);

  // get the controller instance
  const ctrl = this.subject();
  var date = moment(moment()).add('days', 1).format('YYYY-MM-DD');
  assert.equal(ctrl.createEventTest(), date);

  date = moment("2016-01-01");
  ctrl.set('mydate', date);
  assert.equal(ctrl.createEventTest(), "2016-01-01");

});

// Replace this with your real tests.
test('reformat time on start time change', function(assert) {
  assert.expect(2);

  // get the controller instance
  const ctrl = this.subject();
  var hacktime = "2015-01-01 23:30";
  var x = moment(hacktime);
  ctrl.set('startTime', x);
  ctrl.send('timeChanged');
  assert.equal(ctrl.get('time'), "23:30");

  hacktime = "2015-01-01 13:30";
  x = moment(hacktime);
  ctrl.set('startTime', x);
  ctrl.send('timeChanged');
  assert.equal(ctrl.get('time'), "13:30");
});