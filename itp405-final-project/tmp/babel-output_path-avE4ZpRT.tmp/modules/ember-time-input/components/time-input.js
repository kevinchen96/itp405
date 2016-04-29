import Ember from 'ember';
import layout from '../templates/components/time-input';
import moment from 'moment';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['time-input'],
  classNameBindings: ['invalid'],

  format: 'hhmm',
  invalid: false,

  inputIsNativeDate: Ember.computed('value', function () {
    return this.get('value') instanceof Date;
  }),

  momentDate: Ember.computed('value', function () {
    if (this.get('value')) {
      return moment(this.get('value'));
    }
  }),

  valueString: Ember.computed('momentDate', function () {
    var date = this.get('momentDate');
    return date ? date.format(this.get('format')) : '';
  }),

  actions: {
    valueChanged: function valueChanged(valueString) {
      var parsed = moment(valueString, this.get('format'));
      this.set('invalid', !parsed.isValid());
      if (parsed.isValid()) {
        var oldDate = this.get('momentDate');
        var newDate = oldDate ? oldDate.clone() : moment();
        newDate.hours(parsed.hours());
        newDate.minutes(parsed.minutes());

        if (this.get('inputIsNativeDate')) {
          newDate = newDate.toDate();
        }

        this.set('value', newDate);
        this.sendAction('action', newDate);
      }
    }
  }
});