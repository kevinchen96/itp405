define('itp405-final-project/models/user', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
	exports['default'] = _emberDataModel['default'].extend({
		first_name: (0, _emberDataAttr['default'])('string'),
		last_name: (0, _emberDataAttr['default'])('string'),
		email: (0, _emberDataAttr['default'])('string'),
		rating: (0, _emberDataAttr['default'])('number'),
		events: (0, _emberDataAttr['default'])()

	});
});