// Exercise 1 : List of people

const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review about arrays
// 1. Write code to remove “Greg” from the people array.

people.splice(0, 1);

// 2. Write code to replace “James” to “Jason”.

people.splice(2, 1, "Jason");

// 3. Write code to add your name to the end of the people array.

people.push("Alexey");

// 4. Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf("Mary"));

// 5. Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
//  Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//  Hint: Check out the documentation for the slice method

let peopleCopy = people.slice(1, -1);
console.log(peopleCopy);

// 6. Write code that gives the index of “Foo”. Why does it return -1 ?

console.log(people.indexOf("Foo")); // returns -1 for any non-existing elements in array

// 7. Create a variable called last which value is the last element of the array.
//  Hint: What is the relationship between the index of the last element in the array and the length of the array?

let last = people[people.length - 1];
console.log(last);

// Part II - Loops
// 1. Using a loop, iterate through the people array and console.log each person.

for (let i in people) {
  console.log(people[i]);
}

// 2. Using a loop, iterate through the people array and exit the loop after you console.log “Devon”.
//  Hint: take a look at the break statement in the lesson.

for (let i in people) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

// Exercise 2 : Your favorite colors
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//  Hint : create an array of suffixes to do the Bonus

colors = ["white", "yellow", "red", "green", "blue"];
suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  let suffix = suffixes[i];
  console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

// Exercise 3 : Repeat the question
// Prompt the user for a number.
//  Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
//  Tip : Which while loop is more relevant for this situation?

let userInput;

do {
  userInput = prompt("Please enter a number: ");
  userInput = Number(userInput);

  if (isNaN(userInput)) {
    break;
  }
} while (userInput < 10);

// Exercise 4 : Building Management
// 1. Copy and paste the above object to your Javascript file.

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

// 2. Console.log the number of floors in the building.

console.log(building.numberOfFloors);

// 3. Console.log how many apartments are on the floors 1 and 3.

console.log(
  `On floor 1 there are ${building.numberOfAptByFloor.firstFloor} apartments`
);
console.log(
  `On floor 3 there are ${building.numberOfAptByFloor.thirdFloor} apartments`
);

// 4. Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);

// 5. Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

if (
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

// Exercise 5 : Family
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

let family = {
  mother: "Irene",
  father: "Pablo",
  kiddo: "Alex",
};

for (i in family) {
  console.log(i);
}
for (i in family) {
  console.log(family[i]);
}

// Exercise 6 : Rudolf
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”

const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

let result = "";
for (x in details) {
  result += `${x} ${details[x]} `;
}
console.log(result.trim());

// Exercise 7 : Secret Group
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
//  Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();
let societyName = "";

for (let i in names) {
  societyName += names[i][0];
}

console.log(societyName);
