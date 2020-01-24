const path = require("path");
const appDir = path.dirname(require.main.filename);
const fs = require("fs");
const date = new Date();
const DATE = `${date.getDate()}:${date.getMonth() +
  1}-${date.getHours()}:${date.getMinutes()}`;

function save(obj, name, folder = "data", ext = "json") {
  const dir = `${appDir}/${folder}/${DATE}/`;
  if (!fs.existsSync(dir)) {
    if (!fs.existsSync(`${appDir}/${folder}/`)) {
      fs.mkdirSync(`${appDir}/${folder}/`);
    }
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(`${dir}${name}.${ext}`, JSON.stringify(obj, null, 2), {
    mode: 0o755
  });
}

module.exports = save;
