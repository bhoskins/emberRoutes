import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
    this.render();
    this.render('route2', {
      into: 'route3'
    });
  }
});
