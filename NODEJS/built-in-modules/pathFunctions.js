const path = require('path');

var filePath =  '../frontend/html/test123.html';

console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.basename(filePath));
console.log(path.normalize(filePath));
console.log(path.resolve(filePath));
console.log(path.isAbsolute(filePath));

