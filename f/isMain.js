function isMain(m) {
  `uji
  > Check if run directly from console or being require/import

  m => javascript <em>module</em>

  \`\`\`js
  const {isMain} = require('ujian')
  if(isMain(module)){
    console.log('this code will run if someone execute directly')
  } else {
    console.log("being require from somewhere else")
  }
  \`\`\`
  an`;
  return m === require.main;
}

module.exports = isMain;
