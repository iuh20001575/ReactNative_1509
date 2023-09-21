// Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Implement an 'accelerate' method that will increase the car's speed by 10,
    // and log the new speed to the console
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    // Implement a 'brake' method that will decrease the car's speed by 5, and log
    // the new speed to the console
    brake() {
        this.speed += 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    }

    // Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
    get speedUS() {
        return this.speed / 1.6;
    }

    // Add a setter called 'speedUS' which sets the current speed in mi/h (but
    // converts it to km/h before storing the value, by multiplying the input by 1.6)
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// Create a new car
const fordCar = new CarCl('Ford', 120);

// experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
fordCar.accelerate();
fordCar.brake();
fordCar.accelerate();

console.log('Speed:', fordCar.speedUS);
fordCar.speedUS = 80;
console.log('Speed:', fordCar.speedUS);

fordCar.brake();
fordCar.brake();
fordCar.brake();
fordCar.accelerate();
console.log('Speed:', fordCar.speedUS);
