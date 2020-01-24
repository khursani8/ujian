const fs = require('fs');
const isMain = require('./isMain');

function getArgs(fn) {
	try {
		return fn
			.toString()
			.replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/gm, '')
			.match(/function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
			.split(/,/);
	} catch (error) {
		debugger;
	}
}

// ## ${f.name.charAt(0).toUpperCase() + f.name.slice(1)}
const template = (f) => {
	const name = f.name;
	const desc =
		(f.toString().match(/`uji([\s\S]*?)an`.+\s/) || [ '', '' ])[1].slice(1, -1).trim().replace(/\\/gm, '') ||
		'> no description please write it later';
	if (name === 'tqdm') debugger;
	return `
  ## ${name}
  parameter => (${getArgs(f)})
  ${desc}
  `;
};

function addDocs(func, file = true) {
	`uji
  > Generate docs in function like this
  func => function to be pass
  file => true for generate file else return markdown generated
  \`\`\`js
  addDocs(func)
  addDocs(func, true) // generate file
  addDocs(func, false) // return markdown text
  \`\`\`
  an`;
	const out = template(func);
	if (file) fs.writeFileSync(`docs/${func.name}.md`, out);
	else return out;
}

if (isMain(module)) {
	const add = function(left = 40, right = 12) {
		`uji
  add func between two value and it will boom die
  and I dont asd
  adsasdasd
  \`\`\`js
  add(10,12)
  \`\`\`
  an`;
		return left + right;
	};
	addDocs(add);
} else {
	module.exports = addDocs;
}
