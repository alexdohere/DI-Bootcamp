const fs = require("fs");

fs.readFile("source.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the source file:", err);
    return;
  }
  fs.writeFile("destination.txt", data, (err) => {
    if (err) {
      console.error("Error writing to the destination file:", err);
      return;
    }
    console.log("File copied successfully to destination.txt");
  });
});
