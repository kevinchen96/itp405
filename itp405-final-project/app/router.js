import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('register');
  this.route('login');
  this.route('profile');
  this.route('explore');
  this.route('details', { path: '/details/:event_id' });
  this.route('results', function() {
    this.route('events');
    this.route('players');
  });
  this.route('player', {path: '/player/:user_id'});
  this.route('createEvent');

  this.route('admin', function() {
    this.route('users');
    this.route('events');
    this.route('edit', function() {
      this.route('events', {path: '/events/:event_id'});
      this.route('users', {path: '/users/:user_id'});
    });
  });

  
});

export default Router;
