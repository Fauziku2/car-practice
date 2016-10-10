var Car = function (color, convertible) {
  this.speed = 0
  this.color = color
  this.convertible = function (num1, num2) {
    return num1 === num2
  }
}

Car.prototype.acc = function(num) {
    this.speed += num;
};

Car.prototype.setColor = function(color) {
    this.color = color;
};

// Car.prototype.dec = function(num) {
//     return this.speed - num;
// };

// Car.prototype.stop = function() {
//     return this.speed - this.speed;
// };



module.exports = Car
