import Ember from 'ember';

export default Ember.Route.extend({

   renderTemplate: function(){
    this.render();
    this.render('route2', {
      into: 'route1',
      outlet: 'sidebar',
      controller: 'route1'
    });
    this.render('route1b', {
      into: 'route1',
      outlet: 'route1Right',
      controller: 'route2'
    });
  }


});
