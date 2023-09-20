const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array.
// Forumla: recommendedFood = weight ** 0.75 * 28.
// (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach((dog) => {
    const recommendedFood = dog.weight ** 0.75 * 28;

    dog.recommendedFood = recommendedFood;
});

// Find Sarah's dog and log to the console whether it's eating too much or too little;
dogs.forEach((dog) => {
    if (dog.owners.includes('Sarah')) {
        if (dog.curFood <= dog.recommendedFood * 0.9)
            console.log('This dog eats too little');
        else if (dog.curFood >= dog.recommendedFood * 1.1)
            console.log('This dog eats too much');
    }
});

// Create an array containing all owners of dogs who eat too much 'ownersEatTooMuch')
// and an array with all owners of dogs who eat too little ('ownersEatTooLittle')
const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood >= dog.recommendedFood * 1.1)
    .reduce((prev, curr) => [...prev, ...curr.owners], []);

const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood <= dog.recommendedFood * 0.9)
    .reduce((prev, curr) => [...prev, ...curr.owners], []);

// Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// Log to the console whether there is any dog eating an okay amount of food
// (just true or false)

const isEatingOkay = (dog) =>
    dog.curFood < dog.recommendedFood * 1.1 &&
    dog.curFood > dog.recommendedFood * 0.9;

console.log(dogs.some(isEatingOkay));

// Create an array containing the dogs that are eating an okay amount of food
const dogsEatingOkay = dogs.filter(isEatingOkay);
console.log('🚀 ~ dogsEatingOkay:', dogsEatingOkay);
