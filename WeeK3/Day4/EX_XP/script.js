/*Create 2 variables, x and y. Each of them should have a different numeric value.
Write an if/else statement that checks which number is bigger.*/

let x = 5;
let y = 12;

if ( x > y) {
    console.log("x is bigger")
} else {

    console.log(" y is bigger")
}




/* Create a variable called newDog where it’s value is “Chihuahua”.
Check and display how many letters are in newDog.
Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
Check if the variable newDog is equal to “Chihuahua”
if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
else, console.log ‘I dont care, I prefer cats’ */

// Create a variable called newDog where it’s value is “Chihuahua”.

const newDog = "Chihuahua";

// Check and display how many letters are in newDog.

console.log("Number of letters in newDog:", newDog.length);

// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).


console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’ */

if (newDog == "Chihuahua")
   console.log ("I love Chihuahuas, it’s my favorite dog breed");
else 
   console.log ("I dont care, I prefer cats");








// Exercise 3: Even Or Odd


// Prompt the user for a number and save it to a variable.

let num = prompt("Please enter a number: ");

// If it is even, display: “x is an even number”. Where x is the actual number the user chose.

if (num % 2 === 0) {
  console.log(num + " is an even number.");
} 

// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

else {
  console.log(num + " is an odd number.");
}





// Exercise 4: Group Chat 



// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000" ,"street"];


// If there is no users (the users array is empty), console.log “no one is online”.
if (users.length === 0) {
  console.log("no one is online");
} 

// If there is 1 user, console.log “<name_user> is online”.

else if (users.length === 1) {
  console.log(`${users[0]} is online`);
}

// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.

else if (users.length === 2) {
  console.log(`${users[0]} and ${users[1]} are online`);
}

// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.

else {
  const additionalUsers = users.length - 2;
  console.log(`${users[0]}, ${users[1]}, and ${additionalUsers} more are online`);
}













