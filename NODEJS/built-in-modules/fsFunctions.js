// /Users/beingzero/Desktop/mean/sandy-web-development-47/frontend/html/ajax.html

// Built-In Module of NodeJS
const fs = require('fs');
const os = require('os');

// Sync  Function    =>  Returns the value, caller Waits.
// Async Function    =>  Calls the Callback Function, Call doesn't wait.

var data = fs.readFileSync('../frontend/html/ajax.html', {encoding:'utf8'});
console.log(data);

fs.readFile('../frontend/html/ajax.html', function(err, result){
    if(err)
        console.log("ERROR: "+err);
    else
        console.log(result.toString('utf-8'));
})

var fileStats = fs.statSync('../frontend/html/ajax.html');
console.log(JSON.stringify(fileStats));
console.log("FILE SIZE: " + fileStats.size + "bytes");

fs.writeFileSync('../frontend/html/unnecessary1.html', 'test data 1');
fs.renameSync(
    '../frontend/html/unnecessary1.html', 
    '../frontend/html/unnecessary.html'
);

fs.appendFileSync('../frontend/html/unnecessary.html', os.EOL + 'test data 2');
fs.appendFileSync('../frontend/html/unnecessary.html', os.EOL + 'test data 3');

// BIGGER FILES
    // line by line
    // buffer by buffer =====>  STREAM, read from stream


//fs.unlinkSync('../frontend/html/unnecessary.html');


