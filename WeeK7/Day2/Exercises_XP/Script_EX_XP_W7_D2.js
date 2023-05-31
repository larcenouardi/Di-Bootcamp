// Exercise 1 : Analyzing


------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// Output: ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// The spread operator (...) is used to expand the elements of an array. Here, the vegetables and
// fruits are spread into the result array, creating a new array with all the elements.

------2------
const country = "USA";
console.log([...country]);
// Output: ["U", "S", "A"]
// By using the spread operator (...) on a string, each character of the string is spread into separate elements,
//  creating an array of individual characters.

------Bonus------
let newArray = [...[,,]];
console.log(newArray);
// Output: [undefined, undefined]
// The spread operator (...) is used to expand the elements of an array. In this case, the [,,] array is spread,
//  but it does not contain any defined elements, so the elements in newArray will be undefined.





// Exercise 2 : Employees


/ Exercise 2 : Employees


const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// 1. Using the map() method, push into a new array the firstname of the user and a welcome message.

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents); // ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStackResidents = users.filter(user => user.role === "Full Stack Resident");
console.log(fullStackResidents); // [{firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident"}, {firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident"}, {firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident"}]

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const fullStackResidentsLastNames = users
  .filter(user => user.role === "Full Stack Resident")
  .map(user => user.lastName);
console.log(fullStackResidentsLastNames); // ["Bouley", "Alnaji", "Hajek"]







// Exercise 3 : Star Wars




const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicString = epic.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, '');

console.log(epicString); // "a long time ago in a galaxy far far away"






// Exercise 4 : Employees #2


Exercise 4 : Employees #2
const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// Using the filter() method, create a new array, containing the students that passed the course.
const passedStudents = students.filter(student => student.isPassed);

// Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)
passedStudents.forEach(student => {
  console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
});







