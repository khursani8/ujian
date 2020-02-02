const { writeFileSync, readFileSync } = require("fs");
const isMain = require("./isMain");
const equals = require("./equals");
const { mkdirSync } = require("fs");

function logger(fn, folder = "logs") {
  `uji
  > output string to stdout and txt file in one function

  fn => filename of the log
  \`\`\`js
  const title = 'main'
  const log = logger(title)
  log("Hello world") // will write to stdout and file
  \`\`\`
  
  an`;
  const out = console.log;
  const outName = fn + "-" + new Date().getTime() + ".txt";
  const log = function(text) {
    try {
      mkdirSync(folder);
    } catch (error) {}
    out(text);
    writeFileSync(`${folder}/` + outName, text);
  };
  log.outName = outName;
  return log;
}

if (isMain(module)) {
  const log = logger("testLogger");
  const testString = "Hello world";
  log(testString);
  const fileContent = readFileSync("logs/" + log.outName);
  equals(testString, fileContent);
} else {
  module.exports = logger;
}
