import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
    submitFired: function(){
      console.log('route 2 controller fired');
    }
  }
});
