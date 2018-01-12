const _ = require('lodash')
//https://lodash.com/docs/4.17.4#assign
var obj = _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });  
console.log(obj) // → { 'a': 1, 'b': 2, 'c': 3 }
