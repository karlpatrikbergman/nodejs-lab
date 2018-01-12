const fs = require('fs')
const debug = require('debug')('file-read-async-namespace')  
const name = 'file-read-async'  

debug('Start reading a file asynchronously...')

fs.readFile('a-file-to-read.txt', 'utf-8', function (err, content) {  
    if (err) {
        debug('Error happened during reading the file')
        return debug(err)
    }
    debug('Inside callback function: ' + content)
})

debug('After asynchronous file read method call.') 
