import Ember from 'ember';

export default Ember.Component.extend({
	
	name: Ember.computed(function(){
		var mod = this;
		$.ajax({
		      type: 'GET',
		      url: '/api/me'
		 }).then(function(response){
		 	mod.set('name', `${response.first_name} ${response.last_name}`);
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
	  	}
  	}
});
