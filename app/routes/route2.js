import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function(){
    this.render();
    this.render('route1b', {
      into: 'route2',
      // outlet: 'route1',
      controller: 'route1'

    });
  }
});
