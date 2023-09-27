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

createImage('./img/3467768495a4f599cced094k_wallpaper_5.jpg')
    // Consume the promise using .then and also add an error handler
    .then((image) => {
        // After the 2 seconds have passed, hide the current image (set display CSS
        // property to 'none'), and load a second image (Hint: Use the image element
        // returned by the 'createImage' promise to hide the current image. You will
        // need a global variable for that )
        image.style.display = 'none';

        return new Promise((res, rej) => {
            image.src = './img/Nice-Nature-4K.jpg';
            image.onload = async () => {
                await wait(2);

                res(image);
            };

            image.onerror = rej;
        });
    })
    // After the 2 seconds have passed, hide the current image
    .then((image) => (image.style.display = 'none'))
    .catch((err) => console.error(err));

createImage('error path')
    // Consume the promise using .then and also add an error handler
    .then((image) => {
        // After the 2 seconds have passed, hide the current image (set display CSS
        // property to 'none'), and load a second image (Hint: Use the image element
        // returned by the 'createImage' promise to hide the current image. You will
        // need a global variable for that )
        image.style.display = 'none';

        return new Promise((res, rej) => {
            image.src = './img/Nice-Nature-4K.jpg';
            image.onload = async () => {
                await wait(2);

                res(image);
            };

            image.onerror = rej;
        });
    })
    // After the 2 seconds have passed, hide the current image
    .then((image) => (image.style.display = 'none'))
    .catch((err) => console.error(err));
