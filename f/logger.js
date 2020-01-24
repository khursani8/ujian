const { writeFileSync, readFileSync } = require('fs');
const isMain = require('./isMain');
const equal = require('./equal');
const { mkdirSync } = require('fs');
try {
	mkdirSync('logs');
} catch (error) {}

function logger(fn) {
	`uji
  > output string to stdout and txt file in one function
  fn => filename of the log
  an`;
	const out = console.log;
	const outName = fn + '-' + new Date().getTime() + '.txt';
	const log = function(text) {
		out(text);
		writeFileSync('logs/' + outName, text);
	};
	log.outName = outName;
	return log;
}

if (isMain(module)) {
	const log = logger('testLogger');
	const testString = 'Hello world';
	log(testString);
	const fileContent = readFileSync('logs/' + log.outName);
	equal(testString, fileContent);
} else {
	module.exports = logger;
}
