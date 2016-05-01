import Ember from 'ember';

export default Ember.Controller.extend({


	isEmailEmpty: Ember.computed.empty('email'),
	notEmailEmpty: Ember.computed.not('isEmailEmpty'),
	
	emailValid:  Ember.computed.match('email', /^.+@.+\..+$/),
	emailInvalid: Ember.computed.not('emailValid'),

	confirmEmpty: Ember.computed.empty('confirm'),
	passwordEmpty: Ember.computed.empty('password'),

	isEmpty: Ember.computed.or('confirmEmpty', 'passwordEmpty'),
	notEmpty: Ember.computed.not('isEmpty'),

	passwordValid: Ember.computed('password', 'confirm', function(){
		return this.get('password') == this.get('confirm');
	}),
	passwordInvalid: Ember.computed.not('passwordValid'),

	isValid: Ember.computed.and('passwordValid', 'emailValid'),
  	isDisabled: Ember.computed.not('isValid'),

  	actions:{
  		registerUser(){
  			var mod = this;
	  		var fname = this.get('first_name');
	  		var lname = this.get('last_name');
	  		var email = this.get('email');
	  		var rating = this.get('rating');
	  		var password = this.get('password');  		
	        var user = {
	        	first_name: fname,
	        	last_name: lname,
	        	email: email,
	        	rating: rating,
	        	password: password
	        };

	        $.ajax({
	            url: "/auth/register",
	            type: "POST",
	            data: user
	        }).then(function(response) {
	        	console.log("hello");
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
	        }, function(response){
		        	console.log(response);
			 	mod.set('error', response.responseJSON)
			 });
	  	}
  	}
});
