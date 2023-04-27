// Exercises XP Gold //


// Exercise 1 : Favorite Color //

//Write some simple Javascript code that will join all the items in the array above, and console.log the result.//

let sentence = ["my","favorite","color","is","blue"];
let text = sentence.join();
console.log(text)


//Exercise 2 : Mixup//


// Create 2 variables. The values should be strings. For example://

// let str1 = "mix"; // 
// let str2 = "pod"; //

// Slice out and swap the first 2 characters of the two strings from part 1.


let str1 = "mix";
let str2 = "pod";
let result = str2.slice(0,2) + str1.slice(2)  + str1.slice(0,2) + str2.slice(2) ;

console.log(result);

// Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).//

let str01 = "mix";
let str02 = "pod";
let result0 = str02.slice(0,2) + str01.slice(2)  + " " + str01.slice(0,2) + str02.slice(2) ;

console.log(result0);








// Exercise 3 : Calculator 








 // Prompt user for operation type

 const operation = prompt("Enter the operation you want to perform (+, -, *, /):");

 // Prompt user for first number

 const num1 = parseFloat(prompt("Enter the first number:"));

 // Prompt user for second number
 
 const num2 = parseFloat(prompt("Enter the second number:"));

 // Initialize result variable
 
 let resultx;

 // Perform the calculation based on the operation entered by the user
 
 
 if (operation === "+") {
   resultx = num1 + num2;
 } else if (operation === "-") {
   resultx = num1 - num2;
 } else if (operation === "*") {
   resultx = num1 * num2;
 } else if (operation === "/") {
   resultx = num1 / num2;
 } else {
   alert("Invalid operation entered!");
 }

 //  Display the result
  alert(`The result of ${num1} ${operation} ${num2} is ${resultx}`);

