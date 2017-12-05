var HKDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top left, timeBetweenSteps);
};

HKDancer.prototype = Object.create(MakeDancer.prototype);
HKDancer.prototype.constructor = HKDancer;

HKDancer.prototype.step = function () {

  MakeDancer.prototype.step.call(this);



  this.$node.slideToggle();
}
