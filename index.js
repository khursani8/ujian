const {strictEqual,ok} = require('assert').strict;
const strict = (a,b)=>strictEqual(a,b)
const path = require('path');
const appDir = path.dirname(require.main.filename);
const fs = require('fs')
const _ = require('lodash')
const {diffString,diff} = require('json-diff')
const DATE = (new Date).getTime();
/**
 * Testing framework
 *
 * @param {*} r require object
 * @param {*} f what function to test
 * @param {*} t test function on how to test 
 */
const testing = async (r,m,f,t)=>{
  if(isTest(r,m)){
    await t()
    process.exit()
  } else {
    m.exports = f
  }
}

function isTest(r,m) {
  if(!r) r = require.parent
  return r.main===m
}
// isTest = (r)=>r.main===module.parent


function save(obj,name,folder='data',ext='json') {
  const dir = `${appDir}/${folder}/${DATE}/`
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(`${dir}${name}.${ext}`, JSON.stringify(obj,null,2), { mode: 0o755 });
}

function equal(a,b) {
  if(_.isUndefined(a) || _.isUndefined(b)){
    throw new Error('One of the input is undefined');
  }
  if(!_.isEqual(a,b)){
    throw new Error(diffString(a,b))
  }
}

module.exports = {
  isTest,
  strict,
  testing,
  ok,
  save,
  equal,
  diffString,
  diff
}