const obj = {};
const global = { get, set };
const isMain = require('./isMain');

function get(key) {
	`uji
  > Retrieve global variable and print error if key not found
  \`\`\`js
  get(key)
  \`\`\`
  an`;
	if (key in obj) {
		return obj[key];
	} else {
		console.error(`------------${key} not found----------`);
		return null;
	}
}

function set(key, value, force = false) {
	`uji
  > Set global variable
  > [WARNING] Only store something that is static and not dynamically change in program
  \`\`\`js
  set(key,value,force=false)
  \`\`\`
  an`;
	const keys = Object.keys(obj);
	if (!force && keys.includes(key)) {
		console.log(key + ' already exist, please use force=true to overwrite');
		return;
	}
	obj[key] = value; // only set when key not exist or force
	console.log(`done set ${key}\ttypeof ${typeof value}`);
}

if (isMain(module)) {
	set('testKey', 'testValue');
	const v = get('testKey');
	if (v !== 'testValue') throw new Error('Not equal');
} else {
	module.exports = global;
}
