function pick(obj, arr) {
  `uji
  > Picks the key-value pairs corresponding to the given keys from an object.

  obj => object with the corresponding key-value pairs

  arr => list of key want to retrieve
  an`;
  return arr.reduce(
    (acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc),
    {}
  );
}

module.exports = pick;
