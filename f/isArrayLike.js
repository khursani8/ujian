function isArrayLike(obj) {
  `uji
  > check if obj is array like object

  obj => value to check
  \`\`\`js
  const obj = [1,2,3]
  isArrayLike(obj) ? 'is array like' : 'not array like'
  \`\`\`
  an`;
  return obj != null && typeof obj[Symbol.iterator] === "function";
}

module.exports = isArrayLike;
