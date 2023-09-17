const fulfilledPromise = new Promise((res) => res('Successfully'));
console.log('🚀 ~ fulfilledPromise:', fulfilledPromise);

const rejectedPromise = new Promise((res, rej) => rej('Fail'));
console.log('🚀 ~ rejectedPromise:', rejectedPromise);

const pendingPromise = new Promise(() => {});
console.log('🚀 ~ pendingPromise:', pendingPromise);
