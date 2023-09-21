function Car(make, speed) {
    this.make = make;
    this.speed = speed;

    // Implement an 'accelerate' method that will increase the car's speed by 10,
    // and log the new speed to the console
    this.accelerate = () => {
        this.speed += 10;
        console.log(`${this.make} going at ${this.speed} km/h`);
    };

    // Implement a 'brake' method that will decrease the car's speed by 5, and log
    // the new speed to the console
    this.brake = () => {
        this.speed += 5;
        console.log(`${this.make} going at ${this.speed} km/h`);
    };
}

// Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;

    // Implement a 'chargeBattery' method which takes an argument
    // 'chargeTo' and sets the battery charge to 'chargeTo'
    this.chargeBattery = (chargeTo) => {
        this.charge = chargeTo;
    };

    // Implement an 'accelerate' method that will increase the car's speed by 20,
    // and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
    // km/h, with a charge of 22%'
    this.accelerate = () => {
        this.speed += 20;
        this.charge -= 1;

        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`,
        );
    };
}

// Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'!
const teslaCar = new EV('Tesla', 120, 23);

teslaCar.accelerate();
teslaCar.brake();
teslaCar.chargeBattery(90);
teslaCar.accelerate();
teslaCar.brake();
teslaCar.accelerate();
teslaCar.accelerate();
teslaCar.brake();
