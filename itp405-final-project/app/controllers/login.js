import Ember from 'ember';

export default Ember.Controller.extend({
	transitionToProfile: function(){
		this.transitionToRoute('profile');
	},
	reload: function(){
		window.location.reload(true);
	},
  	actions:{
  		loginUser(){
  			var mod = this;
	  		var email = this.get('email');
	  		var password = this.get('password');  		
	        var user = {
	        	email: email,
	        	password: password
	        };

	        $.ajax({
	            url: "/auth/login",
	            type: "POST",
	            data: user
	        }).then(function(response) {
	        	window.location.href = "/profile";
	        });
	  	}
  	}
});
