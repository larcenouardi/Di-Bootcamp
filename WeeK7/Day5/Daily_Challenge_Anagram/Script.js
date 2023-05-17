function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, '');
    str2 = str2.toLowerCase().replace(/\s/g, '');
    return str1.split('').sort().join('') === str2.split('').sort().join('');
  }

  
  console.log(isAnagram("Astronomer", "Moon starer"));  
console.log(isAnagram("School master", "The classroom"));  
console.log(isAnagram("The Morse Code", "Here come dots"));  
console.log(isAnagram("Hello", "World"));  
console.log(isAnagram("Chien", "nichE"));  
console.log(isAnagram("Eleven plus two", "Twelve plus one"));  
console.log(isAnagram("Listen", "Silent"));  
console.log(isAnagram("Goodness", "good"));  
