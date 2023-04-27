//Exercise 1 : Evaluation//

// //For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.




5 >= 1    // is true because 5 is greater than or equal to 1.
0 === 1   // is false because the triple equals operator checks for both value and type equality, and 0 and 1 have different values.
4 <= 1    // is false because 4 is not less than or equal to 1.
1 != 1    // is false because 1 is equal to 1, and the != operator checks for inequality.
"A" > "B"  //  is true because in the ASCII character set, "A" has a greater value than "B".
"B" < "C"   // is true because in the ASCII character set, "B" has a smaller value than "C".
"a" > "A"   // is true because in the ASCII character set, lowercase letters have greater values than uppercase letters.
"b" < "A"  // is false because in the ASCII character set, "b" has a greater value than "A".
true === false   // is false because true and false have different boolean values.
true != true   // is false because true is equal to true, and the != operator checks for inequality.


// Exercise 2 : Ask For Numbers  //

const input = prompt("Entrez une chaîne de nombres séparés par des virgules:");
const numbers = input.split(",").map(num => parseInt(num.trim()));
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`La somme des nombres est : ${sum}`);


// J'ai utiliser tout d'abord la fonction prompt pour demander à l'utilisateur d'entrer une chaîne de nombres séparés par des virgules.
// Ensuite, je sépare la chaîne en un tableau de chaînes de nombres individuelles à l'aide de la méthode split,
// en utilisant la virgule comme séparateur.

// Ensuite, j'utilise la méthode map pour convertir chaque chaîne de nombre en un nombre réel à l'aide de la fonction parseInt et
// en supprimant les espaces à l'aide de la méthode trim.

// Enfin, j'utilise la méthode reduce pour calculer la somme des nombres, 
// en partant d'une valeur initiale de 0, puis j'affiche le résultat dans la console en utilisant une chaîne de caractères formatée.



// Exercise 3 : Find Nemo  //



// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.


const sentence = prompt("Please enter a sentence containing the word 'Nemo':");
const nemoIndex = sentence.indexOf("Nemo");
if (nemoIndex !== -1) {
  console.log(`I found Nemo at position ${nemoIndex}!`);
} else {
  console.log("I can't find Nemo :(");
}




//Exercise 4 : Boom //


// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.




const userInput = prompt("Please enter a number:");
const number = parseInt(userInput);

if (isNaN(number)) {
  console.log("Invalid input, please enter a number.");
} else {
  let result;
  if (number < 2) {
    result = "boom";
  } else {
    result = "B" + "o".repeat(number) + "m";
    if (number % 2 === 0) {
      result += "!";
    }
    if (number % 5 === 0) {
      result = result.toUpperCase();
    }
    if (number % 2 === 0 && number % 5 === 0) {
      result += "!";
      result = result.toUpperCase();
    }
  }
  console.log(result);
}



// Je commence d'abord par la fonction prompt pour demander à l'utilisateur d'entrer un nombre.
//  j'utilise  ensuite la fonction parseInt pour convertir la chaîne d'entrée en un nombre.

// Ensuite je vérifie si l'entrée est un nombre valide en utilisant la fonction isNaN.
//  Si l'entrée n'est pas un nombre, un message d'erreur apparaît dans la console.

// Si l'entrée est un nombre valide, une série d'instructions conditionnelles s'exécutent pour
//  déterminer la chaîne de sortie appropriée en fonction des règles fournies dans la consigne. 
//  s'ajoute une majuscule "B" au début de la chaîne et une minuscule "m" à la fin pour former le mot "Boom".

// Enfin, la chaîne résultante s'affiche dans la console.


