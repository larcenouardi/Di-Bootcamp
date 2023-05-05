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
