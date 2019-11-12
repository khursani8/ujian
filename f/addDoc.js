const fs = require('fs')

function getArgs(fn) {
  return fn.toString()
    .replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/mg,'')
    .match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
    .split(/,/)
}
const descType = (d)=>d.map(el=>{
if(el.type) return `
\`\`\`${el.type}
${el.text}
\`\`\`
`
else return `
${el.text}
`
})

// ## ${f.name.charAt(0).toUpperCase() + f.name.slice(1)}
const template = (f,d)=>`
## ${f.name}
parameter => (${getArgs(f)})
${descType(d).join('')}
`

function addDocs(func,desc=[],file=true) {
  const out = template(func,desc)
  if(file) fs.writeFileSync(`docs/${func.name}.md`,out)
  else return out
}

const {isTest} = require('..')

if(isTest(module)){
  const add = function (left=40,right=12) {
    return left+right
  }
  const example = `
  add(10,12)
  => ${add(10,12)}
  `
  const desc = [{text:"add func between two value"},{text:example,type:'js'}]
  addDocs(add,desc)
} else {
  module.exports = addDocs
}

