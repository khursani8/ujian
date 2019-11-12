const addDocs = require('./addDoc')
const {readFileSync,writeFileSync,readdirSync} = require('fs')

//requiring path and fs modules
const path = require('path');
//joining path of directory 
const loc = '../examplesF/'
const directoryPath = path.join(__dirname, loc);
const funcs = []
//passsing directoryPath and callback function
const files = readdirSync(directoryPath);
for (const file of files) {
  const name = file.split('.')[0]
  if(name==='index') continue
  funcs.push(require(directoryPath+name))
}

for (const f of funcs) {
  addDocs(f)
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