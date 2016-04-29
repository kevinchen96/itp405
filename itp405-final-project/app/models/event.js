import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	name: attr('string'),
	address: attr('string'),
	description: attr('string'),
	city: attr('string'),
	state: attr('string'),
	zip: attr('number'),
	date: attr(),
	time: attr(),
	users: attr()
});
