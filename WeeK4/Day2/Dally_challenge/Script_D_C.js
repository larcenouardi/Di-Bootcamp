const words = prompt("Enter several words separated by commas:").split(",");
const maxLength = Math.max(...words.map(word => word.length));

console.log("*".repeat(maxLength + 4));

words.forEach(word => {
  const spaces = " ".repeat(maxLength - word.length);
  console.log(`* ${word}${spaces} *`);
});

console.log("*".repeat(maxLength + 4));
