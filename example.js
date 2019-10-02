const {testing,check} = require('.')

function add(a,b) {
  return a+b
}

function test() {
  check(add(1,1),2)
  check(add(3,4),7)
  check(add(10000,1),10001)
  check(add(111,1),111)
}

testing(require,add,test)