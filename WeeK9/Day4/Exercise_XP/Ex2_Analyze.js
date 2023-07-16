//  Exercise 2: Analyze
// Instructions
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?




// ==============================================================================>


// When the code is executed, it will log 'calling' to the console, then wait for 2 seconds, and then log 'resolved' to the console.

// So the final output of this code will be:


// calling
// resolved
