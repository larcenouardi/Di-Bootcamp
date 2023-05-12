function playTheGame() {
    


 /*In the function, start by asking the user if they would like to play the game 
 (Hint: use the built-in confirm() function).*/


    const wantToPlay = confirm("Would you like to play the game?");
  


    /* If the answer is false, alert “No problem, Goodbye”. */


    if (!wantToPlay) {
      alert("No problem, Goodbye");
      return;
    }



var checker = false

    do {  const userNumber = parseInt(prompt("Enter a number between 0 and 10:"));
  

    /*You then have to check the validity of the user’s number :
    Check the validity of the user's number */


    /*If the user didn’t enter a number 
    (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.*/

 

    if (isNaN(userNumber)) { checker = false
      alert("Sorry Not a number, Goodbye");
      
    }
  

   /* If the user didn’t enter a number between 0 and 10
    alert “Sorry it’s not a good number, Goodbye”. */

    if (userNumber < 0 || userNumber > 10) { checker = false
      alert("Sorry it’s not a good number, Goodbye");
    }
    
    // Generate a random number between 0 and 10
    const computerNumber = Math.floor(Math.random() * 11);

    compareNumbers(userNumber, computerNumber);

    console.log(`User's number: ${userNumber}`);
    console.log(`Computer's number: ${computerNumber}`);

 } while(checker == true )
  
    /* Ask the user to enter a number between 0 and 10
     (Hint: use the built-in prompt() function). */


    const userNumber = parseInt(prompt("Enter a number between 0 and 10:"));
  

    /*You then have to check the validity of the user’s number :
    Check the validity of the user's number */


    /*If the user didn’t enter a number 
    (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.*/

 

    if (isNaN(userNumber)) {
      alert("Sorry Not a number, Goodbye");
     
    }
  

   /* If the user didn’t enter a number between 0 and 10
    alert “Sorry it’s not a good number, Goodbye”. */

    if (userNumber < 0 || userNumber > 10) {
      alert("Sorry it’s not a good number, Goodbye");
      
    }
    
    // Generate a random number between 0 and 10
    const computerNumber = Math.floor(Math.random() * 11);

    compareNumbers(userNumber, computerNumber);

    console.log(`User's number: ${userNumber}`);
    console.log(`Computer's number: ${computerNumber}`);

      // Compare the two numbers and declare a winner

    
}

function compareNumbers(userNumber, computerNumber) {
    if (userNumber === computerNumber) {
      alert("WINNER");
      return true;
    } else if (userNumber > computerNumber) {
      const newUserNumber = prompt("Your number is bigger than the computer's, guess again:");
      return compareNumbers(parseInt(newUserNumber), computerNumber);
    } else {
      const newUserNumber = prompt("Your number is smaller than the computer's, guess again:");
      return compareNumbers(parseInt(newUserNumber), computerNumber);
    }
    
    return false;
  }
  
    // Compare the two numbers and declare a winner

  

/*  Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber)
 that takes 2 parameters : userNumber and computerNumber



The point of this function is to check if the userNumber is the same as the computerNumber:
If userNumber is equal to computerNumber, alert “WINNER” and stop the game.



If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” 
(Hint: use the built-in prompt() function to ask the user for a new number).




If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” 
(Hint: use the built-in prompt() function to ask the user for a new number).



If the user guessed more than 3 times, alert “out of chances” and exit the function.

*/


  