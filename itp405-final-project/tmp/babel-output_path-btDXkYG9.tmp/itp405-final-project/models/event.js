define('itp405-final-project/models/event', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
	exports['default'] = _emberDataModel['default'].extend({
		name: (0, _emberDataAttr['default'])('string'),
		address: (0, _emberDataAttr['default'])('string'),
		description: (0, _emberDataAttr['default'])('string'),
		city: (0, _emberDataAttr['default'])('string'),
		state: (0, _emberDataAttr['default'])('string'),
		zip: (0, _emberDataAttr['default'])('number'),
		date: (0, _emberDataAttr['default'])(),
		time: (0, _emberDataAttr['default'])(),
		users: (0, _emberDataAttr['default'])()
	});
});