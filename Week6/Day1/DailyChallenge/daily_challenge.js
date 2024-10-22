// 1st daily challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise
//  is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise
//  is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

const makeAllCaps = (arr) =>
  new Promise((resolve, reject) => {
    if (arr.every((element) => typeof element === "string")) {
      resolve(arr.map((element) => element.toUpperCase()));
    } else {
      reject("Not all elements are strings");
    }
  });

const sortWords = (arr) =>
  new Promise((resolve, reject) => {
    if (arr.length > 4) {
      resolve(arr.sort());
    } else {
      reject("The array is too short");
    }
  });

makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 2nd daily challenge
// Create three functions. The two first functions should return a promise..

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

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

const toJs = () =>
  new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morseObj);
      }
    } catch (error) {
      reject("Failed to parse Morse JSON");
    }
  });

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.

const toMorse = (morseJS) =>
  new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();
    const translation = [];

    for (const char of userInput) {
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Character "${char}" not found in Morse code`);
        return;
      }
    }
    resolve(translation);
  });

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
// Chain the three functions.

const joinWords = (morseTranslation) => {
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = morseTranslation.join("<br>");
  document.body.appendChild(resultDiv);
};

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => alert(error));
