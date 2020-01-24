const path = require('path');
const appDir = path.dirname(module.filename); // where code being called

const fs = require('fs');
const date = new Date();
const DATE = `${date.getDate()}:${date.getMonth() + 1}-${date.getHours()}:${date.getMinutes()}`;

const isMain = require('./isMain');
const equal = require('./equal');
function save(obj, name = 'noName', folder = 'data', ext = 'json') {
	`uji
	> Save variable to a file for reproduce testing and debugging
	obj => variable to store
	name => filename for that variable
	folder => folder name for saved variable
	ext => extension for that variable, json by default
	an`;
	const dir = `${appDir}/${folder}/${DATE}/`;
	if (!fs.existsSync(dir)) {
		if (!fs.existsSync(`${appDir}/${folder}/`)) {
			fs.mkdirSync(`${appDir}/${folder}/`);
		}
		fs.mkdirSync(dir);
	}
	const filePath = `${dir}${name}.${ext}`;
	fs.writeFileSync(filePath, JSON.stringify(obj, null, 2), {
		mode: 0o755
	});
	return filePath;
}

if (isMain(module)) {
	objToSave = { key: 'value' };
	const path = save(objToSave);
	const content = JSON.parse(fs.readFileSync(path));
	equal(objToSave, content);
} else {
	module.exports = save;
}
