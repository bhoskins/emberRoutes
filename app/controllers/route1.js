import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submitFired: function(){
      console.log('route 1 controller fired');
    }
  }
});
