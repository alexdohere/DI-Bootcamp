// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
//
// #1.1 - run in the console:
// funcOne()
//
// ANSWER: 3, because using let allows reassigning.
//
// #1.2 What will happen if the variable is declared
// with const instead of let ?
//
// ANSWER: TypeError, because using const doesn't allow reassigning.

// #2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }
//
// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }
//
// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
//
// ANSWER: 0, 5. funcThree initially alerts 0 but after calling funcTwo it becomes 5.
//
// #2.2 What will happen if the variable is declared
// with const instead of let ?
//
// ANSWER: TypeError, because using const doesn't allow reassigning.

// #3
// function funcFour() {
//     window.a = "hello";
// }
//
//
// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
//
// #3.1 - run in the console:
// funcFour()
// funcFive()
//
// ANSWER: hello, because a is a global variable via window.

// #4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }
//
//
// #4.1 - run in the console:
// funcSix()
//
// ANSWER: test, bacause these are different a's, one in global scope and other in local.
//
// #4.2 What will happen if the variable is declared
// with const instead of let ?
//
// ANSWER: same result.

// #5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
//
// #5.1 - run the code in the console
//
// ANSWER: 5 in first alert and 2 in the second.
//
// #5.2 What will happen if the variable is declared
// with const instead of let ?
//
// ANSWER: same result.

// Exercise 2 : Ternary operator
// Instructions
// Using the code below:
//
// function winBattle(){
//     return true;
// }
//
// 1. Transform the winBattle() function to an arrow function.
// 2. Create a variable called experiencePoints.
// 3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints
//     variable should be equal to 10, else the variable should be equal to 1.
// 4. Console.log the experiencePoints variable.

let winBattle = () => {
  return true;
};

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// Exercise 3 : Is it a string ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not.
// The function should return true or false
//
// Check out the example below to see the expected output
// Example:
//
// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

let isString = (str) => typeof str === "string";

console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

let sum = (a, b) => a + b;

console.log(sum(4, 5));

// Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
//
// 1. First, use function declaration and invoke it.
// 2. Then, use function expression and invoke it.
// 3. Write in a one line comment, the difference between function declaration and function expression.
// 4. Finally, use a one line arrow function and invoke it.

function toGramDecl(kg) {
  return kg * 1000;
}
console.log(toGramDecl(5));

let toGram = function (kg) {
  return kg * 1000;
};
console.log(toGram(5));

// Function declarations are hoisted and can be called before being defined, function expressions need to be defined.

let toGramArrow = (kg) => kg * 1000;
console.log(toGramArrow(5));

// Exercise 6 : Fortune teller
// Instructions
// 1. Create a self invoking function that takes 4 arguments:
//     number of children, partner’s name, geographic location, job title.
// 2. The function should display in the DOM a sentence like
//     "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function myFunc(numberOfChildren, partnersName, location, jobTitle) {
  let fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnersName} with ${numberOfChildren} kids.`;
  document.getElementById("fortune-teller").innerText = fortune;
})(2, "Sam", "Chicago", "magician");

// Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.
//
// 1. Create a Navbar in your HTML file.
// 2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// 3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.

(function (name, imgSrc) {
  let navBar = document.getElementById("navBar");

  let welcomeDiv = document.createElement("div");
  welcomeDiv.textContent = `Welcome, ${name}!`;

  let img = document.createElement("img");
  img.src = imgSrc;
  img.style.width = "50px";
  img.style.height = "50px";

  navBar.appendChild(welcomeDiv);
  navBar.appendChild(img);
})(
  "John",
  "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
);

// Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.
// Part I:
// 1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// 2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like
//     "The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// 3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// Part II:
// 1. In the makeJuice function, create an empty array named ingredients.
// 2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
// 3. Create a new inner function named displayJuice that displays on the DOM a sentence like
//    "The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
// 4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE.
//    Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
  let ingredients = [];

  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1, ingredient2, ingredient3);
  }

  function displayJuice() {
    let message = `The client wants a ${size} juice, containing ${ingredients.join(
      ", "
    )}.`;
    document.body.innerText = message;
  }

  addIngredients("apple", "kiwi", "orange");
  addIngredients("banana", "strawberry", "watermelon");
  displayJuice();
}

makeJuice("medium");
