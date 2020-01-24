const { strictEqual, ok } = require("assert").strict;
const strict = (a, b) => strictEqual(a, b);

const _ = require("lodash");
const { diffString, diff } = require("json-diff");

const blacklist = ["_id", "updated"];

function equal(a, b, name = "") {
  if (_.isUndefined(a) || _.isUndefined(b)) {
    throw new Error("One of the input is undefined");
  }
  if (_.isArray(a)) {
    const keys = _.keys(a[0]).filter(el => !blacklist.includes(el));
    a = a.map(el => _.pick(el, keys));
  } else {
    delete a._id;
    delete a.updated;
  }
  if (_.isArray(b)) {
    const keys = _.keys(b[0]).filter(el => !blacklist.includes(el));
    b = b.map(el => _.pick(el, keys));
  } else {
    delete b._id;
    delete b.updated;
  }
  if (!_.isEqual(a, b)) {
    throw new Error(diffString(a, b));
  }
  console.log("pass test:" + name);
}

if (isMain(module)) {
  console.log(isTest(module)); // check for deprecated message
} else {
  module.exports = {
    strict,
    testing,
    ok,
    equal,
    diffString,
    diff,
    addDocs: require("./f/addDoc"),
    global: require("./f/global")
  };
}
