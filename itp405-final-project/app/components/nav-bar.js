import Ember from 'ember';

export default Ember.Component.extend({
	query: '',
	filter: Ember.computed(function(){
		if(window.location.pathname == "/results/players"){
			return 'players';
		}
		else{
			return 'events';
		}
	}),
	isEvent: Ember.computed.equal('filter', 'events'),
	isAdmin: false,
	name: Ember.computed(function(){
		var mod = this;
		$.ajax({
		      type: 'GET',
		      url: '/api/me'
		 }).then(function(response){
		 	mod.set('name', `${response.first_name} ${response.last_name}`);
		 	if(response.admin){
		 		mod.set('isAdmin', true);
		 	}
		 });
	}),

	loggedIn: Ember.computed.bool('name'),

  	actions:{
  		logout(){
	        $.ajax({
	            url: "/auth/logout",
	            type: "POST"
	        }).then(function(response) {
	            window.location.href = "/";
	        });
	  	},

	  	selectFilter(value){
	  		this.set('filter', value);
	  		console.log(this.get('filter'));
	  	},
	  	search(){
	  		console.log(this.get('filters'));
	  		var filter = this.get('filter');
	  		var queries = this.get('query').replace(/ /g, '+');
	  		// console.log(this.get('query'));
	  		// console.log(queries);
	  		if(this.get('filter') == 'events'){
	  			// var route = 'results.event';
	  			window.location.href="/results/events?q="+queries;
	  		}
	  		else{
	  			window.location.href="/results/players?q="+queries;
	  		}
	  		// }
	  	}

  	}
});
