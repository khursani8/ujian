```
_   _   ___ _____  ___   _   _ 
| | | | |_  |_   _|/ _ \ | \ | |
| | | |   | | | | / /_\ \|  \| |
| | | |   | | | | |  _  || . ` |
| |_| /\__/ /_| |_| | | || |\  |
 \___/\____/ \___/\_| |_/\_| \_/
                                
```

## Setup

```sh
npm install ujian
```

## Example

### isTest
> For checking if the code run directly or evaluate through import/require

#### example file name add.js
```js
const {isTest} = require('ujian')
if(isTest(module)){
  console.log('this code will run if someone execute directly... eg. node add.js')
} else {
  console.log("this code will run if it being require from somewhere else eg. require('./add.js')")
}
```