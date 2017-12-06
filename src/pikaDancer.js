var PikaDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  //console.log('hi');
};

PikaDancer.prototype = Object.create(MakeDancer.prototype);
PikaDancer.prototype.constructor = PikaDancer;

PikaDancer.prototype.step = function () {

  MakeDancer.prototype.step.call(this);


  this.$node.slideToggle('fast');
  this.$node.slideToggle('fast');
}
