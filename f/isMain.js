function isMain(m) {
  return m === require.main;
}

module.exports = isMain;
