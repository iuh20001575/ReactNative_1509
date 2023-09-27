const ENDPOINT = 'https://geocode.xyz/';
const AUTH = '365372460447482140862x72152';

// Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
// and a longitude value ('lng') (these are GPS coordinates, examples are in test
// data below).
function whereAmI(lat, lng) {
    // Reverse geocoding
    fetch(`${ENDPOINT}${lat},${lng}?geoit=json&auth=${AUTH}`)
        .then((res) => {
            // This API allows you to make only 3 requests per second. If you reload fast, you
            // will get this error with code 403. This is an error with the request. Remember,
            // fetch() does not reject the promise in this case. So create an error to reject
            // the promise yourself, with a meaningful error message
            if (!res.ok)
                throw new Error(`Have a ${res.status} error with geocode`);

            return res.json();
        })
        .then((data) => {
            // Once you have the data, take a look at it in the console to see all the attributes
            // that you received about the provided location. Then, using this data, log a
            // message like this to the console: “You are in Berlin, Germany”
            console.log(data);
            console.log(`You are in ${data.city}, ${data.country}`);

            // Now it's time to use the received data to render a country. So take the relevant
            // attribute from the geocoding API result, and plug it into the countries API that
            // we have been using
            return fetch(
                `https://restcountries.com/v2/name/${data.country}?fullText=true`,
            );
        })
        // Render the country and catch any errors, just like we have done in the last
        // lecture (you can even copy this code, no need to type the same code)
        .then((res) => {
            if (!res.ok)
                throw new Error(
                    `Have a ${res.status} error with restcountries`,
                );

            return res.json();
        })
        .then((data) => console.log(`Country: ${data[0].name}`))
        // Chain a .catch method to the end of the promise chain and log errors to the console
        .catch((err) => console.error(err));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
