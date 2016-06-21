import Ember from 'ember';

export default Ember.Component.extend ({
  background: Ember.computed('test' , function() {

    console.log(this.get('test').val().color);
    var temp = this.get('test').val().color;

    //if test === 1, set color
    if(temp === 1) {
      Ember.$('#test').removeClass();
      Ember.$('#test').addClass('background1');
    } else { //else, set another color
      Ember.$('#test').removeClass();
      Ember.$('#test').addClass('background2');
    }
    this.sendAction('refreshRoute');

    return temp;
  }),
  actions: {
    changeBackground() {
      console.log("poop");
    }
  }
});
