var HoneyMakerBee = function() {
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype.color = Bee.prototype.color;

HoneyMakerBee.prototype.food = Grub.prototype.food;

HoneyMakerBee.prototype.eat = Grub.prototype.eat;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot += 1;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot -= 1;
}

