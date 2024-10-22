const greet = require("./greeting");
const colorfulMessage = require("./colorful-message");
const readFile = require("./read-file");

const message = greet("User");
console.log(message);
colorfulMessage();
readFile();
