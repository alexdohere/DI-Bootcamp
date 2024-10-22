const _ = require("lodash");
const math = require("./math");

const num1 = 5;
const num2 = 10;

const sum = math.add(num1, num2);
const product = math.multiply(num1, num2);

const numbers = [1, 2, 3, 4, 5];
const shuffled = _.shuffle(numbers);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);
console.log(`Shuffled Numbers: ${shuffled}`);
