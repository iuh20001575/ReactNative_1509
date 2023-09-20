// Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
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

// Create 2 'Car' objects
const bmwCar = new Car('BMW', 120);
const mercedesCar = new Car('Mercedes', 95);

// calling 'accelerate' and 'brake' multiple times on each of them
bmwCar.accelerate();

mercedesCar.brake();

bmwCar.brake();
bmwCar.accelerate();

mercedesCar.brake();
mercedesCar.accelerate();
mercedesCar.accelerate();

bmwCar.brake();
bmwCar.brake();

mercedesCar.accelerate();

bmwCar.brake();
bmwCar.accelerate();
