define('ember-bootstrap-datetimepicker/components/bs-datetimepicker', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var computed = _ember['default'].computed;
  var run = _ember['default'].run;

  var computedProps = _ember['default'].A(['minDate', 'maxDate', 'disabledDates', 'enabledDates', 'dateIcon', 'placeholder']);

  var bsDateTimePickerComponent = _ember['default'].Component.extend({
    concatenatedProperties: ['textFieldClassNames'],
    classNames: ['date'],
    classNameBindings: ['inputGroupClass'],
    textFieldClassNames: ['form-control'],
    bsDateTimePicker: null,
    dateIcon: 'glyphicon glyphicon-calendar',
    placeholder: '',

    inputGroupClass: computed('attrs.noIcon', function () {
      if (!this.getAttr('noIcon')) {
        return 'input-group';
      }
    }),

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);

      var target;
      if (this.getAttr('noIcon')) {
        target = this.$('.' + this.get('textFieldClassNames').join('.'));
      } else {
        target = this.$();
      }

      var bsDateTimePicker = target.datetimepicker(this._buildConfig());
      this.bsDateTimePicker = bsDateTimePicker.data('DateTimePicker');
      this.scheduledUpdate = run.scheduleOnce('afterRender', this, this._setupChangeEvent, bsDateTimePicker);

      this._updateDateTimePicker();

      if (this.attrs.open) {
        this.bsDateTimePicker.show();
      }
    },

    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);

      run.cancel(this.scheduledUpdate);
      this.bsDateTimePicker.destroy();
    },

    didReceiveAttrs: function didReceiveAttrs() {
      this._super.apply(this, arguments);
      this._updateDateTimePicker();
    },

    _setupChangeEvent: function _setupChangeEvent(bsDateTimePicker) {
      var _this = this;

      bsDateTimePicker.on('dp.change', function (ev) {
        run(function () {
          if (_this.attrs.updateDate) {
            if (_ember['default'].isNone(ev.date) || ev.date === false) {
              _this.sendAction('updateDate', undefined);
            } else if (!ev.date.isSame(_this.getAttr('date'))) {
              if (_this.attrs.forceDateOutput) {
                _this.sendAction('updateDate', ev.date.toDate());
              } else {
                _this.sendAction('updateDate', ev.date);
              }
            }
          }
        });
      });
    },

    _updateDateTimePicker: function _updateDateTimePicker() {
      var dateTimePicker = this.bsDateTimePicker;
      if (dateTimePicker) {
        if (this.getAttr('disabled')) {
          dateTimePicker.disable();
        } else {
          dateTimePicker.enable();
        }

        if (this.getAttr('date') === undefined) {
          dateTimePicker.date(null);
        } else {
          dateTimePicker.date(this.getAttr('date'));
        }

        if (!this.getAttr('minDate')) {
          dateTimePicker.minDate(false);
        } else {
          dateTimePicker.minDate(this.getAttr('minDate'));
        }

        if (!this.getAttr('maxDate')) {
          dateTimePicker.maxDate(false);
        } else {
          dateTimePicker.maxDate(this.getAttr('maxDate'));
        }

        if (!this.getAttr('disabledDates')) {
          dateTimePicker.disabledDates([]);
        } else {
          dateTimePicker.disabledDates(this.getAttr('disabledDates'));
        }

        if (!this.getAttr('enabledDates')) {
          dateTimePicker.enabledDates([]);
        } else {
          dateTimePicker.enabledDates(this.getAttr('enabledDates'));
        }
      }
    },

    _buildConfig: function _buildConfig() {
      var datetimepickerDefaultConfig = _ember['default'].$.fn.datetimepicker.defaults;
      var isDatetimepickerConfigKeys = Object.keys(datetimepickerDefaultConfig);
      var config = {};
      var configKey;
      for (var i = 0; i < isDatetimepickerConfigKeys.length; i++) {
        configKey = isDatetimepickerConfigKeys[i];
        if (!computedProps.contains(configKey)) {
          config[configKey] = this.getWithDefault(configKey, datetimepickerDefaultConfig[configKey]);
        }
      }

      return config;
    }
  });

  exports['default'] = bsDateTimePickerComponent;
});