var car = {
  // Properties
  speed: 5,
  maxSpeed: 100,
  acceleration: 5,
  // Methods
  accelerate: function () {
    if (this.speed < this.maxSpeed) {
      this.speed += this.acceleration;
    }
  },
  brake: function () {
    if (this.speed > 0) {
      this.speed -= this.acceleration;
    }
  },
  stop: function () {
    this.speed = 0;
  },
};

// Example usage
console.log("Starting speed: " + car.speed);
car.accelerate();
console.log("Speed after accelerating: " + car.speed);
car.brake();
console.log("Speed after braking: " + car.speed);
car.stop();
console.log("Speed after stopping: " + car.speed);
