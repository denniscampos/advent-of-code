const fs = require("fs");

function readFile(input) {
  const file = fs.readFileSync(input, "utf-8");
  return file.split("\r\n");
}

module.exports = { readFile };
