const {strictEqual,ok} = require('assert').strict;
const strict = (a,b)=>strictEqual(a,b)
const path = require('path');
const appDir = path.dirname(require.main.filename);
const fs = require('fs')
const _ = require('lodash')
const {writeFileSync} = require('fs')
const {diffString,diff} = require('json-diff')
const date = new Date
const DATE = `${date.getDate()}:${date.getMonth()+1}-${date.getHours()}:${date.getMinutes()}`
/**
 * Testing framework
 *
 * @param {*} r require object
 * @param {*} f what function to test
 * @param {*} t test function on how to test 
 */
const testing = async (m,f,t)=>{
  const split = m.filename.split('/')
  const name = split[split.length-1].slice(0,-3)
  if(isMain(m)){
    console.log(`start testing ${name} function`)
    await t()
    console.log(`end testing ${name} function`)
    process.exit()
  } else {
    m.exports = f
  }
}

function isMain(m) {
  return m===require.main
}
function isTest(m) {
  console.warn('`isTest` is deprecated and is now named `isMain`.')
  return isMain(m)
}
// isMain = (r)=>r.main===module.parent


function save(obj,name,folder='data',ext='json') {
  const dir = `${appDir}/${folder}/${DATE}/`
  if (!fs.existsSync(dir)){
    if (!fs.existsSync(`${appDir}/${folder}/`)){
      fs.mkdirSync(`${appDir}/${folder}/`);
    }
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(`${dir}${name}.${ext}`, JSON.stringify(obj,null,2), { mode: 0o755 });
}

const blacklist = ['_id','updated']

function equal(a,b,name='') {
  if(_.isUndefined(a) || _.isUndefined(b)){
    throw new Error('One of the input is undefined');
  }
  if(_.isArray(a)){
    const keys = _.keys(a[0]).filter(el=>!blacklist.includes(el))
    a = a.map(el=>_.pick(el,keys))
  } else {
    delete a._id
    delete a.updated
  }
  if(_.isArray(b)){
    const keys = _.keys(b[0]).filter(el=>!blacklist.includes(el))
    b = b.map(el=>_.pick(el,keys))
  } else {
    delete b._id
    delete b.updated
  }
  if(!_.isEqual(a,b)){
    throw new Error(diffString(a,b))
  }
  console.log('pass test:' + name)
}

function logger(fn) {
  const out = console.log
  const outName = fn+'-'+(new Date()).getTime()+'.txt'
  return function log(text) {
    out(text);
    writeFileSync('logs/'+outName,text);
  }
}

if(isMain(module)){
  console.log(isTest(module)) // check for deprecated message
  
} else {
  module.exports = {
    isTest,
    isMain,
    strict,
    testing,
    ok,
    save,
    equal,
    diffString,
    diff,
    addDocs:require('./f/addDoc'),
    global: require('./f/global'),
    logger
  }
}
