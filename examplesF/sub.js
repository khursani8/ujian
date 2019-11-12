const {testing,equal} = require('..')

function sub(a=0,b=0) {
  return a-b
}

function test() {
  equal(sub(1,1),0)
  equal(sub(3,4),-1)
  equal(sub(10000,1),9999)
  equal(sub(111,1),110)
}

testing(module,sub,test)