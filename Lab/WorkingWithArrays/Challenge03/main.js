function calcAverageHumanAge(ages) {
    return ages
        .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
        .filter((age) => age >= 18)
        .reduce((prev, curr, index, arr) => prev + curr / arr.length, 0);
}

console.log('=== TEST DATA 1 ===');
console.log(
    '🚀 ~ The average human age of all adult dogs:',
    calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]).toFixed(2),
);
console.log('\n=== TEST DATA 2 ===');
console.log(
    '🚀 ~ The average human age of all adult dogs:',
    calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]).toFixed(2),
);
