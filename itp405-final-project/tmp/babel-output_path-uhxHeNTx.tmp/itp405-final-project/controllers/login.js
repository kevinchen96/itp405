define('itp405-final-project/controllers/login', ['exports', 'ember'], function (exports, _ember) {
		exports['default'] = _ember['default'].Controller.extend({
				actions: {
						loginUser: function loginUser() {
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
								}).then(function (response) {
										window.location.href = "/profile";
								}, function (response) {
										mod.set('error', response.responseJSON.error);
								});
						}
				}
		});
});