const fulfilledPromise = new Promise((res) => res('Successfully'));
fulfilledPromise
    .then((data) => console.log('fulfilledPromise ~ data: ', data))
    .catch((error) => console.log('fulfilledPromise ~ error: ', error))
    .finally(() => console.log('fulfilledPromise ~ finally'));

const rejectedPromise = new Promise((res, rej) => rej('Fail'));
rejectedPromise
    .then((data) => console.log('rejectedPromise ~ data: ', data))
    .catch((error) => console.log('rejectedPromise ~ error: ', error))
    .finally(() => console.log('rejectedPromise ~ finally'));
