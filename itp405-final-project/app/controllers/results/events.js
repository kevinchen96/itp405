import Ember from 'ember';

export default Ember.Controller.extend({
	q: '',
	queryParams: ['q'],
	queries: Ember.computed('q', function(){
		return this.get('q').split(" ");
	}),
	item: Ember.computed('queries', function(){
		var mod = this;
		var data = {
			queries: this.get('queries')
		};
		console.log(data);
		$.ajax({
		      type: 'GET',
		      url: '/api/query/events',
		      data: data
		 }).then(function(response){
		 	console.log(response);
		 	mod.set('item', response.event);
		 });
	}),
});
