const { strictEqual, ok } = require("assert").strict;
const strict = (a, b) => strictEqual(a, b);
//requiring path and fs modules
const path = require("path");
const fs = require("fs");

//joining path of directory
const loc = "./f/";
const directoryPath = path.join(__dirname, loc);
const functionsPath = fs.readdirSync(directoryPath);
const functions = getFunctionsfromPath(functionsPath);

// backward compatible patch
function isTest(m) {
  console.warn("`isTest` is deprecated and is now named `isMain`");
  return functions["isMain"](m);
}
//

const toBeExport = {
  ...functions,
  isTest,
  strict,
  ok
};

if (functions["isMain"](module)) {
  debugger;
} else {
  module.exports = toBeExport;
}

function getFunctionsfromPath(functionsPath) {
  return functionsPath.reduce((a, b) => {
    const key = b.split(".");
    try {
      a[key[0]] = require(loc + b);
    } catch (error) {
      debugger;
      console.log(error);
    }
    return a;
  }, {});
}
