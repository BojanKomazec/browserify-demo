// 'uniq' is a npm package which contains method 'unique' which removes all duplicates from an array in place.
// https://www.npmjs.com/package/uniq
// To install it use:
// > npm install uniq

let logOutput = document.getElementById('log-output');

let unique = require('uniq');
const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
let uniqueData = unique(data);
console.log(uniqueData);
logOutput.innerText = uniqueData;

let greetingService = require('./greetingService.js');
// !!! Important note !!!
// Don't forget now to re-run browserify with greetingService.js file added:
// > browserify main.js greetingService.js -o bundle.js

let greeting = greetingService.greet('Bojan');
console.log(greeting);
logOutput.innerText += '\n' + greeting;

let Calculator = require('./calculator.js');
let calculator = new Calculator();
let res = calculator.add(1, 2);
console.log(res);
logOutput.innerText += '\n' + res;
