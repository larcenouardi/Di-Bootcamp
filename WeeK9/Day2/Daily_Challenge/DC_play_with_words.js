function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      const allStrings = words.every(word => typeof word === 'string');
  
      if (allStrings) {
        const uppercased = words.map(word => word.toUpperCase());
        resolve(uppercased);
      } else {
        reject('Array contains non-string elements');
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sorted = words.sort();
        resolve(sorted);
      } else {
        reject('Array length is not bigger than 4');
      }
    });
  }

  
  makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));
// Output: Array contains non-string elements

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));
// Output: Array length is not bigger than 4

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch(error => console.log(error));
// Output: ["APPLE", "BANANA", "KIWI", "MELON", "PEAR"]







