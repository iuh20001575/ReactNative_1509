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

        return this;
    }

    // Implement a 'brake' method that will decrease the car's speed by 5, and log
    // the new speed to the console
    brake() {
        this.speed += 5;
        console.log(`${this.make} going at ${this.speed} km/h`);

        return this;
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

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;

        return this;
    }

    accelerate() {
        this.speed += 20;
        this.#charge -= 1;

        console.log(
            `${this.make} going at ${this.speed} km/h, with a charge of ${
                this.#charge
            }%`,
        );

        return this;
    }
}

const rivianCar = new EVCl('Rivian', 120, 23);

rivianCar
    .accelerate()
    .brake()
    .chargeBattery(90)
    .accelerate()
    .brake()
    .accelerate()
    .accelerate()
    .brake();
