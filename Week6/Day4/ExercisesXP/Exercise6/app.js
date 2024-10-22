const chalk = require("chalk");

console.log(chalk.blue("Hello, this is a blue message!"));
console.log(chalk.red.bold("This is a bold red message!"));
console.log(chalk.green("This message is in green!"));
console.log(
  chalk.yellow.bgCyan("This message has a yellow font on a cyan background!")
);
console.log(chalk.magenta("Enjoy using chalk!"));
