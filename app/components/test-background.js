import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    colorChange(color){
      // console.log(color);
      if(color === 1) {
        $('#black').addClass("background1");
      } else {
        $('#black').addClass("background2");
      }
    },
  }
});
