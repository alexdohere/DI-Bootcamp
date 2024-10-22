const fs = require("fs");
const path = require("path");

function readFile() {
  const filePath = path.join(__dirname, "files", "file-data.txt");
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

module.exports = readFile;
