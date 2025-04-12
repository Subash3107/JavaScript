// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It is a way to handle asynchronous operations more effectively, allowing you to write cleaner and more manageable code.

// A Promise is a way to handle asynchronous operations in JavaScript. It represents a value that may be available now, in the future, or never.
// A Promise has 3 states:
// 1. Pending: the initial state (The Promise is neither fulfilled nor rejected).
// 2. Fulfilled: The Promise has been resolved successfully, and you can access the result.
// 3. Rejected: The Promise has failed, and you can access the error reason.


// (resolve, reject) => { ... }: Pass a function to the Promise constructor. This function is called the executor function.
// The executor function takes two arguments: resolve and reject. These are functions that you can call to resolve or reject the Promise.

let p = new Promise((resolve, reject) => { // (resolve, reject) => { } one callback function with two parameters
    resolve("resolve will print if we use p.then") // call back function with resolve
    reject("reject will print if we use .catch") // call back function with reject 
})
p.then((result) => { // p.then will catch resolve
    console.log(result);
}).catch((err) => {   // if their is no resolve then catch will catch reject block
    console.log(err);
}).finally( // regardless of .then or .catch is present or not .finally will run first
    console.log("promise is running")
)
