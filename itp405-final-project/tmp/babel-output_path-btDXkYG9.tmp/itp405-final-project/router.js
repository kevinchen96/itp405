define('itp405-final-project/router', ['exports', 'ember', 'itp405-final-project/config/environment'], function (exports, _ember, _itp405FinalProjectConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _itp405FinalProjectConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('register');
    this.route('login');
    this.route('profile');
    this.route('explore');
    this.route('details', { path: '/details/:event_id' });
    this.route('results', function () {
      this.route('events');
      this.route('players');
    });
    this.route('player', { path: '/player/:user_id' });
    this.route('createEvent');
  });

  exports['default'] = Router;
});