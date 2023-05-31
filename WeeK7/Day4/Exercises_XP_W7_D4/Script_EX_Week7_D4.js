// Exercise 1 : Location


Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

=> I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



// The code defines an object person with properties name, age, and location. The location property is another object that contains properties country, city, and coordinates.
//  The coordinates property is an array with two values representing latitude and longitude.

// Then, the code uses destructuring assignment to extract specific values from the person object. 
// It assigns the value of name to the variable name, and the values of country, city, and the first and second elements of the
//  coordinates array to the variables country, city, lat, and lng, respectively.

// Finally, the code logs a string using template literals, combining the extracted values to form the output message.




// Exercise 2: Display Student Info


// function displayStudentInfo(objUser){
//   //destructuring
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// //output : 'Your full name is Elie Schoppik'





function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
  }
  
  displayStudentInfo({ first: 'Elie', last: 'Schoppik' }); // Your full name is Elie Schoppik




//   Exercise 3: User & Id



// Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const users = { user1: 18273, user2: 92833, user3: 90315 };

const userArray = Object.entries(users);

console.log(userArray); // [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]


const userArray = Object.entries(users).map(([key, value]) => [key, value * 2]);

console.log(userArray); // [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]




// Exercise 4 : Person Class




// Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

=> "object"

// In this code, we define a Person class with a constructor that takes a name parameter and assigns it to a name property of the instance.

// Next, we create a new instance of the Person class with the name 'John' and assign it to the member variable.

// Finally, we log the type of the member variable to the console using the typeof operator. 
// Since member is an instance of the Person class, which is an object, the output of the typeof operator will be 'object'.







// Exercise 5 : Dog Class




// Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Analyze the options below. Which constructor will successfully extend the Dog class?

//   // 1
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.size = size;
//     }
//   };
  
  
//     // 2
//   class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
//     // 3
//   class Labrador extends Dog {
//     constructor(size) {
//       super(name);
//       this.size = size;
//     }
//   };
  
  
//     // 4
//   class Labrador extends Dog {
//     constructor(name, size) {
//       this.name = name;
//       this.size = size;
//     }
//   };







// The constructor that will successfully extend the Dog class is option 2:

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};

// because the constructor in option 2 calls the constructor of the Dog class using the super() keyword.
// This ensures that the Labrador class inherits all of the properties and methods of the Dog class.





// Exercise 6 : Challenges



// Evaluate these (ie True or False)

[2] === [2] 
{} === {}

// [2] === [2]: False. The two arrays are equal in value, but they are not equal in reference. This is because arrays are objects, and objects are always compared by reference in JavaScript.


// {} === {}: False. The two objects are equal in value, but they are not equal in reference. This is because objects are always compared by reference in JavaScript.




What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)
console.log(object3.number)
console.log(object4.number)


// object1.number: The value of the number property of object1 is 4. This is because we set the value of the number property of object1 to 4.
// object2.number: The value of the number property of object2 is also 4. This is because object2 is a reference to object1, and the value of the number property of object1 has been changed.
// object3.number: The value of the number property of object3 is also 4. This is because object3 is also a reference to object1, and the value of the number property of object1 has been changed.
// object4.number: The value of the number property of object4 is 5. This is because object4 is a separate object, and its number property has not been changed.



// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
  sound(sound) {
    return `${this.name} is a ${this.type}, ${this.color} and makes the sound ${sound}`;
  }
}

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.



const farmerCow = new Mamal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("moo"));


// => Lily is a cow, brown and white and makes the sound moo