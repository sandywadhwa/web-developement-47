var mymath = require('./math');

var a = 10;
var b = 20;

/* Calling Synchronous Function */
var sum = mymath.addSync(a, b);
console.log(`Sync Sum is ${sum}`);

/* Calling Async Function */
mymath.addAsync(a, b, function(err, result){
    if(err)
        console.log("ERROR: "+err);
    else
        console.log(`Async Sum is ${result}`);
})

var divCallback = function(err, result){
    if(err)
        console.log("ERROR: "+err);
    else
        console.log(`Async Div is ${result}`);
}

/* callback function can be a variable which is pre-assigned
a function in it*/
mymath.divAsync(a, 0, divCallback);
