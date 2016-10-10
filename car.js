var Car = function (speed, color, convertible) {
  this.speed = speed
  this.color = color
  this.convertible = function (num1, num2) {
    return num1 === num2
  }
}

Car.prototype.acc = function(num) {
    return this.speed + num;
};


Car.prototype.setColor = function(color) {
    return this.color = color;
};

// Car.prototype.dec = function(num) {
//     return this.speed - num;
// };

// Car.prototype.stop = function() {
//     return this.speed - this.speed;
// };



module.exports = Car
