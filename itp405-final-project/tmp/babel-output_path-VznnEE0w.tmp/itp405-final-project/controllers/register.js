define('itp405-final-project/controllers/register', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({

		isEmailEmpty: _ember['default'].computed.empty('email'),
		notEmailEmpty: _ember['default'].computed.not('isEmailEmpty'),

		emailValid: _ember['default'].computed.match('email', /^.+@.+\..+$/),
		emailInvalid: _ember['default'].computed.not('emailValid'),

		confirmEmpty: _ember['default'].computed.empty('confirm'),
		passwordEmpty: _ember['default'].computed.empty('password'),

		isEmpty: _ember['default'].computed.or('confirmEmpty', 'passwordEmpty'),
		notEmpty: _ember['default'].computed.not('isEmpty'),

		passwordValid: _ember['default'].computed('password', 'confirm', function () {
			return this.get('password') == this.get('confirm');
		}),
		passwordInvalid: _ember['default'].computed.not('passwordValid'),

		isValid: _ember['default'].computed.and('passwordValid', 'emailValid'),
		isDisabled: _ember['default'].computed.not('isValid'),

		actions: {
			registerUser: function registerUser() {
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
				}).then(function (response) {
					console.log(response);
				});
			}
		}
	});
});