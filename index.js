const { strictEqual, ok } = require("assert").strict;
const strict = (a, b) => strictEqual(a, b);
const _ = require("lodash");
//requiring path and fs modules
const path = require("path");
const fs = require("fs");

//joining path of directory
const loc = "./f/";
const directoryPath = path.join(__dirname, loc);
const functionsPath = fs.readdirSync(directoryPath);
const functions = getFunctionsfromPath(functionsPath);
const toBeExport = {
  ...functions,
  strict,
  ok
};
// debugger;
module.exports = toBeExport;

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
