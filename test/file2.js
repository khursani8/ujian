const {isTest} = require('../')
require('./file3')
if(isTest(module)){
  console.log('test2')
} else {
  console.log('require2')
}