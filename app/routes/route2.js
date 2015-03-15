import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function(){
    this.render();
    this.render('route1', {
      into: 'route2',
      outlet: 'route2Outlet',
      controller: 'route2'
    });
  this.render('route1b', {
    into: 'route1',
    outlet: 'sidebar'
  });
  this.render('route1c2', {
    into: 'route1b',
    outlet: 'route1bOutlet'
  });
  this.render('route2', {
    into: 'route1',
    outlet: 'route1Right',
    controller: 'route1'
  })
  }
});
