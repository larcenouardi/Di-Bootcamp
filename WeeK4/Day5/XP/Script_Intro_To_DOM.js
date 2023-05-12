
// Exercise 1 : Users


// Add the code above, to your HTML file

// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.






// Retrieve the div and console.log it
const container = document.querySelector("#container");
console.log(container);

// Change the name "Pete" to "Richard".
const pete = document.querySelector('ul.list li:nth-child(2)');
pete.textContent = 'Richard';

// Delete the <li> that contains the text node "Sarah". (It's the second <li> of the second <ul>)
const sarah = document.querySelector('ul.list:nth-child(2) li:nth-child(2)');
sarah.remove();

// Change each first name of the two <ul>'s to your name. (Hint: use a loop)
const allLiElements = document.querySelectorAll('ul.list li:first-child');
for (let li of allLiElements) {
  li.textContent = 'Lahcen';
}

// Bonus - Using JavaScript:
// Add a class called "student_list" to both of the <ul>'s.
// Add the classes "university" and "attendance" to the first <ul>.
const allUlElements = document.querySelectorAll('ul.list');
for (let ul of allUlElements) {
  ul.classList.add ('student_list');
}
const firstUl = document.querySelector('ul.list');
firstUl.classList.add ('university', 'attendance');




// Exercise 2 : Users And Style



