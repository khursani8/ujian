const { writeFileSync } = require("fs");

function logger(fn) {
  const out = console.log;
  const outName = fn + "-" + new Date().getTime() + ".txt";
  return function log(text) {
    out(text);
    writeFileSync("logs/" + outName, text);
  };
}

module.exports = logger;
