const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      try {
        const morseObj = JSON.parse(morse);
        if (Object.keys(morseObj).length === 0) {
          throw new Error('Morse object is empty');
        }
        resolve(morseObj);
      } catch (error) {
        reject(error.message);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt('Enter a word or sentence:');
      if (userInput === null) {
        reject('No input provided');
      } else {
        const morseTranslation = [];
        const userInputLowerCase = userInput.toLowerCase();
        for (const char of userInputLowerCase) {
          if (morseJS.hasOwnProperty(char)) {
            morseTranslation.push(morseJS[char]);
          } else {
            reject(`Character "${char}" does not exist in the morse JavaScript object`);
            return;
          }
        }
        resolve(morseTranslation);
      }
    });
  }
  
  function joinWords(morseTranslation) {
    const joinedMorse = morseTranslation.join(' ');
    document.getElementById('output').textContent = joinedMorse;
  }
  
  toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch((error) => console.log(error));
  