const isMain = require("./isMain");

const mainWrapper = async (m, f, t) => {
  `uji
  > WIP
  an`;
  const split = m.filename.split("/");
  const name = split[split.length - 1].slice(0, -3);
  if (isMain(m)) {
    console.log(`start testing ${name} function`);
    await t();
    console.log(`end testing ${name} function`);
    process.exit();
  } else {
    m.exports = f;
  }
};

module.exports = mainWrapper;
