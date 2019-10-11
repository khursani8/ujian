const {testing,equal} = require('.')

function add(a,b) {
  return a+b
}

function test() {
  equal(add(1,1),2)
  equal(add(3,4),7)
  equal(add(10000,1),10001)
  equal(add(111,1),111)
}

testing(module,add,test)