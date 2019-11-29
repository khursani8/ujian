const {testing,equal} = require('..')

async function add(a=0,b=0) {
  `uji
  > add func between two value and it will boom die
  \`\`\`js
  add(a,b)
  \`\`\`
  an`
  return a+b
}

function test() {
  equal(add(1,1),2)
  equal(add(3,4),7)
  equal(add(10000,1),10001)
  equal(add(111,1),112)
}

testing(module,add,test)