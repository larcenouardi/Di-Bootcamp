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













// Ask the user which language they speak.

let langage = prompt("Which language do you speak?");

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

langage = langage.toLowerCase();



// Create a few conditions :


                 // If the user speaks French : display “Bonjour”
switch(langage) {
  case "français":
    console.log("Bonjour");
    break; 
                 // If the user speaks English : display “Hello”

  case "english":
    console.log("Hello");
    break;
                 // If the user speaks Hebrew : display “Shalom”     
      
  case "hebrew":
    console.log("Shalom");
    break;
                 // If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
  default:
    console.log("01110011 01101111 01110010 01110010 01111001");
    break;
}







// Ask the user for their grade.
const grade = prompt("What is your grade?");
// If the grade is bigger than 90, console.log “A”
if (grade > 90) {
  console.log("A");
}
// If the grade is between 80 and 90 (included), console.log “B”
else if (grade >= 80 && grade <= 90) {
  console.log("B");
}
// If the grade is between 70(included) and 80 (included), console.log “C”
else if (grade >= 70 && grade <= 80) {
  console.log("C");
} 

// If the grade is lower than 70, console.log “D”

else {
  console.log("D");
}



// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.


let verb = prompt("Please enter a verb: ");

if (verb.length < 3) {
  console.log("The verb is too short. It should be at least 3 characters long.");
} else {
  if (verb.slice(-3) === "ing") {
    verb += "ly";
  } else {
    verb += "ing";
  }
  
  console.log("Modified verb:", verb);
}
