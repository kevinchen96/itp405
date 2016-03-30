import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return $.getJSON("http://itp-api.herokuapp.com/artists");
	}
});
