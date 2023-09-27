function wait(seconds) {
    return new Promise((res) => setTimeout(res, seconds * 1000));
}

// Create a function 'createImage' which receives 'imgPath' as an input.
// This function returns a promise which creates a new image (use
// document.createElement('img')) and sets the .src attribute to the
// provided image path
function createImage(imgPath) {
    const images = document.querySelector('.images');

    return new Promise((res, rej) => {
        const image = document.createElement('img');
        image.src = imgPath;

        // When the image is done loading, append it to the DOM element with the
        // 'images' class, and resolve the promise. The fulfilled value should be the
        // image element itself. In case there is an error loading the image (listen for
        // the'error' event), reject the promise
        image.onload = async () => {
            // After the image has loaded, pause execution for 2 seconds using the 'wait'
            // function we created earlier
            await wait(2);

            images.append(image);

            res(image);
        };

        image.onerror = rej;
    });
}

// Write an async function 'loadNPause' that recreates Challenge #2, this time
// using async/await (only the part where the promise is consumed, reuse the
// 'createImage' function from before)
async function loadNPause(images) {
    try {
        const image = await createImage(images[0]);

        image.style.display = 'none';

        await new Promise((res, rej) => {
            image.src = images[1];
            image.style.display = 'unset';
            image.onload = async () => {
                await wait(2);

                res(image);
            };

            image.onerror = rej;
        });

        image.style.display = 'none';
    } catch (error) {
        console.error(err);
    }
}

// loadNPause([
//     './img/img-1.jpg',
//     './img/img-2.jpg',
// ]);

// loadNPause(['error path', './img/img-2.jpg']);

// Create an async function 'loadAll' that receives an array of image paths 'imgArr'
async function loadAll(imgArr) {
    // Use .map to loop over the array, to load all the images with
    // the 'createImage' function (call the resulting array 'imgs')
    const imgs = imgArr.map(createImage);

    // Check out the 'imgs' array in the console! Is it like you expected?
    console.log('🚀 ~ loadAll ~ imgs:', imgs);
    // ? The result is not as expected because it returns a list of promises
    // ? rather than image elements

    // Use a promise combinator function to actually get the images from the array
    try {
        const res = await Promise.all(imgs);
        console.log('🚀 ~ loadAll ~ Promise combinator:', res);

        res.map((image) => image.classList.add('parallel'));
    } catch (error) {
        console.error(error);
    }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
