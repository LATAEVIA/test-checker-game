import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeBackground(background) {
      if(background.color === 1) {
        background.color = 0;
        background.save();
        $('#test').removeClass();
        $('#test').addClass('background1');
      } else {
        background.color = 1;
        background.save();
        $('#test').removeClass();
        $('#test').addClass('background2');
      };
      this.sendAction('refreshRoute');
    },
  }
});
