// Instructions
// Create a function that:
// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.
// Example of anagrams
// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

function checkAnagram(firstString, secondString) {
  firstString = sanitizeString(firstString);
  secondString = sanitizeString(secondString);

  if (firstString.length !== secondString.length) {
    return false;
  }

  const sortedFirst = firstString.split("").sort().join("");
  const sortedSecond = secondString.split("").sort().join("");

  return sortedFirst === sortedSecond;
}

function sanitizeString(str) {
  return str.replace(/\s/g, "").toLowerCase();
}

console.log(checkAnagram("Astronomer", "Moon starer"));
console.log(checkAnagram("School master", "The classroom"));
console.log(checkAnagram("The Morse Code", "Here come dots"));
