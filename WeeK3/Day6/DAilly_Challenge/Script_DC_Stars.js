// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *



const numRows = 10;

for (let i = 1; i <= numRows; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '* ';
  }
  console.log(row);
}






const numRows1 = 10;

for (let i = 1; i <= numRows1; i++) {
  let row1 = '';
  for (let j = 1; j <= i; j++) {
    row1 += '* ';
  }
  console.log(row1);
}