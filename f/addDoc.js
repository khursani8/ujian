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
const template = (f)=>{
  const name = f.name
  const desc = (f.toString().match(/".+/) || [""])[0].slice(1,-1) || 'no description please write it later'
  return `
  ## ${name}
  parameter => (${getArgs(f)})
  \`\`\`
  ${desc}
  \`\`\`
  `
}

function addDocs(func,file=true) {
  const out = template(func)
  if(file) fs.writeFileSync(`docs/${func.name}.md`,out)
  else return out
}


if(module===require.main){
  const add = function (left=40,right=12) {
    "add func between two value and it will boom die"    
    return left+right
  }
  const example = `
  add(10,12)
  => ${add(10,12)}
  `
  const desc = [{text:"add func between two value"},{text:example,type:'js'}]
  addDocs(add)
} else {
  module.exports = addDocs
}

