const addDocs = require('./addDoc')

const add = require('../examplesF/add')
const sub = require('../examplesF/sub')

const example = `
add(10,12)
=> ${add(10,12)}
`
const desc = [{text:"add func between two value"},{text:example,type:'js'}]
addDocs(add,desc)

const exampleSub = `
sub(10,12)
=> ${sub(10,12)}
`
const descSub = [{text:"subtract func between two value"},{text:exampleSub,type:'js'}]
addDocs(sub,descSub)