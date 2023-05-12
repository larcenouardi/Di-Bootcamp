
                                                    // Part I - Review About Arrays



const people = ["Greg", "Mary", "Devon", "James"];



            // => console.log(people);
            //   (4) ['Greg', 'Mary', 'Devon', 'James']



// Write code to remove “Greg” from the people array.


people.splice(people.indexOf("Greg"), 1);
            
                //  => console.log(people);
                // (3) ['Mary', 'Devon', 'James']


// Write code to replace “James” to “Jason”.


people.splice(people.indexOf("James"), 1, "Jason");

      
                 // =>console.log(people);
                //  (3) ['Mary', 'Devon', 'Jason']



// Write code to add your name to the end of the people array.


people.push("Lahcen OUARDI");


                // => console.log(people);
                //  (4) ['Mary', 'Devon', 'Jason', 'Lahcen OUARDI']



// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.


console.log(people.indexOf("Mary"));

                        //   =>console.log(people.indexOf("Mary"));
                        //     0  


//  Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.

const copyOfPeople = people.slice(1, 3);

                        // => console.log(copyOfPeople);
                        //    (2) ['Devon', 'Jason']



//  Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf("Foo"));

// => -1 // "Foo" is not found in the array, that's why the indexOf method returns -1



// Create a variable called last which value is the last element of the array.


 const last = people[people.length - 1];


            //  => console.log(last);
            //   Lahcen OUARDI
            
 // What is the relationship between the index of the last element in the array and the length of the array?

 // => The relationship between the index of the last element in the array and the length of the array is that the last element has an index of array.length - 1.

 



                                                                    //  Part II - Loops


// Using a loop, iterate through the people array and console.log each person.

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  }


// =>
// Mary
// Devon
// Jason
// Lahcen OUARDI



// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.


for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Jason") {
      break;
    }
  }


// =>
// Mary
// Devon
// Jason


                                            // Exercise 2 : Your Favorite Colors


// Create an array called colors where the value is a list of your five favorite colors.


const colors = ["blue", "red", "green", "yellow", "purple"];



// => console.log(colors);
// (5) ['blue', 'red', 'green', 'yellow', 'purple']




// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
  }

// My #1 choice is blue
// My #2 choice is red
// My #3 choice is green
// My #4 choice is yellow
// My #5 choice is purple


// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.

const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  let suffix;

  if (i < 3) {
    suffix = suffixes[i];
  } else {
    suffix = suffixes[3];
  }

  console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}


//  My 1st choice is blue
//  My 2nd choice is red
//  My 3rd choice is green
//  My 4th choice is yellow
//  My 5th choice is purple





                                                        // Exercise 3 : Repeat The Question



// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

let number = prompt("Enter a number:");
while (typeof number === "string" && parseFloat(number) < 10) {
  number = prompt("Enter a new number:");
}

// The entry control while loop evaluates the condition at the beginning of the loop, 
// and if the condition is true, the loop body is executed. If the condition is false, 
// the loop is not executed at all.







                                                    // Exercise 4 : Building Management

  
  
  
// Copy and paste the above object to your Javascript file.



const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

// Console.log the number of floors in the building.

console.log(building.numberOfFloors);

                    //  => : 4 

                    
                    
// Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);                    
 
                    //  => : 3
                    //  => : 9


// Console.log the name of the second tenant and the number of rooms he has in his apartment.


const secondTenant = building.nameOfTenants[1];

console.log("Second Tenant:", secondTenant);






// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.




const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
if ((sarahRent + davidRent) > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]); 




                                                                                                            // Exercise 5 : Family      






// Create an object called family with a few key value pairs.

const family = {
    dad: "John",
    mom: "Jane",
    son: "Jack",
    daughter: "Jill",
  };
  
//   Using a for in loop, console.log the keys of the object.

for (let key in family) {
    console.log(key);
  }



// Using a for in loop, console.log the values of the object

for (let key in family) {
    console.log(family[key]);
  }





                                                                                                        //   Exercise 6 : Rudolf










// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }


// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”             


const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  };
  
  let str =   ""  ;
  
  for (let key in details) {
    str += details[key] + " ";
  }
  
  console.log("my " + str.trim());



                                                                                                          //   Exercise 7 : Secret Group

//  A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//  Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretSocietyName = names
  .map(name => name[0])
  .sort()
  .join('');

console.log(secretSocietyName);


