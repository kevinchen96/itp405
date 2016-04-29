define('ember-time-input/components/time-input', ['exports', 'ember', 'ember-time-input/templates/components/time-input', 'moment'], function (exports, _ember, _emberTimeInputTemplatesComponentsTimeInput, _moment) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    layout: _emberTimeInputTemplatesComponentsTimeInput['default'],
    classNames: ['time-input'],
    classNameBindings: ['invalid'],

    format: 'hhmm',
    invalid: false,

    inputIsNativeDate: _ember['default'].computed('value', function () {
      return this.get('value') instanceof Date;
    }),

    momentDate: _ember['default'].computed('value', function () {
      if (this.get('value')) {
        return (0, _moment['default'])(this.get('value'));
      }
    }),

    valueString: _ember['default'].computed('momentDate', function () {
      var date = this.get('momentDate');
      return date ? date.format(this.get('format')) : '';
    }),

    actions: {
      valueChanged: function valueChanged(valueString) {
        var parsed = (0, _moment['default'])(valueString, this.get('format'));
        this.set('invalid', !parsed.isValid());
        if (parsed.isValid()) {
          var oldDate = this.get('momentDate');
          var newDate = oldDate ? oldDate.clone() : (0, _moment['default'])();
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
});