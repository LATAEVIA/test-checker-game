import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    changeBackground(background) {
      background.color = 0;
      background.save();
      // var params = 1;
      // this.sendAction('changeBackground',background, params);
      this.sendAction('refresh');
    },
    resetBackground(background) {
      background.color = 1;
      background.save();
      // var params = 0;
      // this.sendAction('resetBackground',background, params);
      this.sendAction('refresh');
    }
  }
});
