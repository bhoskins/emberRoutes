import Ember from 'ember';

export default Ember.Route.extend({

   renderTemplate: function(){
    this.render();
    this.render('route2', {
      into: 'route1',
      outlet: 'sidebar',
      controller: 'route1'
    });
    this.render('route1c', {
      into: 'route1',
      outlet: 'route1Right'
    });
    this.render('route1c2', {
      into: 'route1c',
      controller: 'route1'
    });

  }


});
