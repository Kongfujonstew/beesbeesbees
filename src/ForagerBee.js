var ForagerBee = function() {
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.color = Bee.prototype.color;

ForagerBee.prototype.food = Grub.prototype.food;

ForagerBee.prototype.eat = Grub.prototype.eat;

ForagerBee.prototype.forage = function(item) {
  this.treasureChest.push(item);
}


