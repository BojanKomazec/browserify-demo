// 'uniq' is a npm package which contains method 'unique' which removes all duplicates from an array in place.
// https://www.npmjs.com/package/uniq
// To install it use:
// > npm install uniq

var unique = require('uniq');
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
let uniqueData = unique(data);
console.log(uniqueData);

let logOutput = document.getElementById('log-output');
logOutput.innerText = uniqueData;