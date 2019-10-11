const {isTest} = require('../')

if(isTest(module)){
  console.log('test3')
} else {
  console.log('require3')
}