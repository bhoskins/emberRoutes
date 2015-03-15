import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('route1', { path: '/'}, function(){
      this.route('route1b');
      this.route('route1c', function(){
          this.route('route1c2');
      });
  });
  this.route('route2');


  this.route('route3');
});

export default Router;
