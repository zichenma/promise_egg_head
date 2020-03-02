let promise = Promise.resolve(42);
console.log(promise); // Primise {<resolved>: 42}
// whenever you pass native object in Promise, you get back exact same object
console.log(Promise.resolve(promise) === promise) // true


// if pass a reject promise into Promise.resolve(), will get a fullfilled reject promise 
const rejectedPromise = Promise.reject(new Error("("));

console.log(Promise.resolve(rejectedPromise) === rejectedPromise) // true

// convert jQuery (or any promise like obj) get to native promise: 
// Promise.resolve($.getJSON('url')).then(...)