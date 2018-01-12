const fs = require('fs')  

let content //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let 
try {  
      content = fs.readFileSync('a-file-to-read.txt', 'utf-8')
} catch (ex) {
      console.log(ex)
}
console.log(content)  
