import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
	first_name: attr('string'),
	last_name: attr('string'),
	email: attr('string'),
	rating: attr('number'),
	events: attr()

});
