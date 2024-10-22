const { readFile, writeFile } = require("./fileManager");

const helloContent = readFile("Hello World.txt");
console.log(`Content of Hello World.txt: ${helloContent}`);

writeFile("Bye World.txt", "Writing to the file");
console.log("Content written to Bye World.txt.");
