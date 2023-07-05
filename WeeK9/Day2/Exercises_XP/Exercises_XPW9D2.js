// EX : 1 : 

function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10`);
      } else {
        reject(`${num} is greater than 10`);
      }
    });
  }


  //In this example, the promise should reject
compareToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error)); // "15 is greater than 10"

//In this example, the promise should resolve
compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error)); // "8 is less than or equal to 10"



// EX : 2 :


const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success');
    }, 4000);
  });
  
  myPromise.then(result => {
    console.log(result); // "success"
  });



//   EX: 3 :


const myPromise1 = Promise.resolve(3);
const myPromise2 = Promise.reject('Boo!');

myPromise1.then(result => {
  console.log(result); // 3
});

myPromise2.catch(error => {
  console.log(error); // "Boo!"
});