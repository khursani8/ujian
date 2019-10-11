const {isTest} = require('../')
require('./file2')

if(isTest(module)){
  console.log('test1')
} else {
  console.log('require1')
}