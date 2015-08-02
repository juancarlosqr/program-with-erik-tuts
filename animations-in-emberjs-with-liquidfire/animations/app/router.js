import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('band', function() {
    this.route('details');
    this.route('song');
  });
});

export default Router;
