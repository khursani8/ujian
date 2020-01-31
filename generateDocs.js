const { addDocs } = require("./index");
const { mkdirSync, readdirSync } = require("fs");
try {
  mkdirSync("docs");
} catch (error) {}
//requiring path and fs modules
const path = require("path");
//joining path of directory
const loc = "./f/";
const directoryPath = path.join(__dirname, loc);
const funcs = [];
//passsing directoryPath and callback function
const files = readdirSync(directoryPath);
const blacklist = ["index", "README", "util"];
for (const file of files) {
  const name = file.split(".")[0];
  if (blacklist.includes(name)) continue;
  const f = require(directoryPath + name);
  if (typeof f === "function") funcs.push(f);
  else if (typeof f === "object") {
    // debugger
    for (const v of Object.values(f)) {
      if (typeof v === "function") funcs.push(v);
      else {
        console.log("skip function:", name);
      }
    }
  } else {
    console.log("skip function:", name);
  }
}

for (const f of funcs) {
  addDocs(f);
  console.log(f.name);
}

// const example = `
// add(10,12)
// => ${add(10,12)}
// `
// const desc = [{text:"add func between two value"},{text:example,type:'js'}]
// addDocs(add,desc)

// const exampleSub = `
// sub(10,12)
// => ${sub(10,12)}
// `
// const descSub = [{text:"subtract func between two value"},{text:exampleSub,type:'js'}]
// addDocs(sub,descSub)
