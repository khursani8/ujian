const _ = require("lodash");
const blacklist = ["_id", "updated"];
const { diffString, diff } = require("json-diff");
const isMain = require("./isMain");

function equal(a, b, name = "") {
  `uji
  > Check if both value equal or not
  
  a => compare from
  
  b => compare with 
  an`;
  try {
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
    if (name) console.log("pass test:" + name);
  } catch (error) {
    debugger;
  }
}

if (isMain(module)) {
  equal(1 + 1, 2);
} else {
  module.exports = equal;
}
