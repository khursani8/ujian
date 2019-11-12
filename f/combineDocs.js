const {readFileSync,writeFileSync,readdirSync} = require('fs')

//requiring path and fs modules
const path = require('path');
//joining path of directory 
const loc = '../docs/'
const directoryPath = path.join(__dirname, loc);
const toc = []
const docs = []
//passsing directoryPath and callback function
const files = readdirSync(directoryPath);
for (const file of files) {
  const name = file.split('.')[0]
  if(name==='index') continue
  toc.push(name)
  docs.push(readFileSync(directoryPath+file).toString());
}

const tocMD = `
# Table of Contents
${toc.map((el,i)=>`${i+1}. [${el}](#${el})`).join('\n')}
`

writeFileSync(directoryPath+'index.md',tocMD + '\n' + docs.join('\n'));