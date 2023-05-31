// Exercise 1 : Find The Sum



// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const add = (a, b) => a + b;

console.log(add(2, 3)); // 5
console.log(add(10, -5)); // 5
console.log(add(0.1, 0.2)); // 0.30000000000000004.

function add(a, b) {
  return a + b;
}




// Exercise 2 : Kg And Grams.




// Function declaration 
function convertToGrams(weightInKg) {
    return weightInKg * 1000;
  }
  console.log(convertToGrams(5)); // Output: 5000
  // Function expression
  const convertToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
  };
  console.log(convertToGramsExpression(2.3)); // Output: 2300
  
  // Arrow function
  const convertToGramsArrow = (weightInKg) => weightInKg * 1000;
  console.log(convertToGramsArrow(10)); // Output: 10000





// Exercise 3 : Fortune Teller




(function(numberOfChildren, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    document.getElementById('fortune-teller').innerHTML = fortune;
  })(3, 'Sarra', 'New York', 'Web Developer');








