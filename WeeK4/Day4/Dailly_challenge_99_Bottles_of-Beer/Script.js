
let numBottles = parseInt(prompt("How many bottles do you want to start with?"));

while (numBottles > 0) {
  let word = numBottles === 1 ? "bottle" : "bottles";
  console.log(numBottles + " " + word + " of beer on the wall");
  console.log(numBottles + " " + word + " of beer");
  console.log("Take " + (numBottles > 1 ? "one" : "it") + " down, pass it around");
  numBottles--;
  word = numBottles === 1 ? "bottle" : "bottles";
  console.log(numBottles === 0 ? "No more bottles of beer on the wall" : numBottles + " " + word + " of beer on the wall");
}
