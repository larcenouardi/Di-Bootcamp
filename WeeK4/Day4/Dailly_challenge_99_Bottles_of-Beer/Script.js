let numBottles = parseInt(prompt("Enter the number of bottles:"));
let subtracted = 1;

while (numBottles > 0) {
  let bottlesText = numBottles === 1 ? "bottle" : "bottles";
  console.log(`${numBottles} ${bottlesText} of beer on the wall`);
  console.log(`${numBottles} ${bottlesText} of beer`);

  let passingText = subtracted === 1 ? "it" : "them";

  numBottles -= subtracted;
  console.log(`Take ${subtracted} down, pass ${passingText} around`);
  subtracted++;

  let remainingBottlesText = numBottles === 1 ? "bottle" : "bottles";
  let remainingBottles = numBottles === 0 ? "no" : numBottles;

  if (numBottles === 0) {
    console.log(`${remainingBottles} bottle of beer on the wall`);
  }
  
  else if (numBottles <= 1) {
    console.log("No more bottles of beer on the wall");
    break;
  }

  
  

  else {
    console.log(`${remainingBottles} ${remainingBottlesText} of beer on the wall`);
  }

  console.log(); 
}
