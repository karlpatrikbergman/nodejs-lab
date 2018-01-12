const async = require("async")
const fs = require('fs')


async.map(['file1', 'file2', 'file3'], fs.stat, function (err, results) {  
    if(err) {
        console.log(err);
    } else {
        console.log(results)
    }
})
