var HKDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src=src/hello_kitty001.png height=50>')

};

HKDancer.prototype = Object.create(MakeDancer.prototype);
HKDancer.prototype.constructor = HKDancer;

HKDancer.prototype.step = function () {

  MakeDancer.prototype.step.call(this);

  this.$node.slideToggle('slow');

}
