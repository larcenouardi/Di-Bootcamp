// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values);
  })
  .catch(error => {
    console.log(error);
  });


//   Promise.all takes an array of promises as its argument.
// In this example, promise1 is already resolved with a value of 3 using Promise.resolve().
// promise2 is a regular value of 42, not a promise.
// promise3 is a promise that resolves after a timeout of 3000 milliseconds with the value 'foo'.
// When Promise.all is called with the array of promises, it returns a new promise that resolves to an array of the resolved values of the input promises.
// In this case, the output will be an array [3, 42, "foo"] because all the promises in the input array have resolved successfully.
// If any of the promises in the input array were to be rejected, the catch block would be triggered instead, allowing you to handle the error.