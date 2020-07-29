// setTimeout


// This will call, callbackFunction after timeInMs
// setTimeout(callbackFunction, timeInMS);


function printHello(){
    console.log("Hello World First");
}

setTimeout(printHello, 2000);


setTimeout(function(){
    console.log("Hello World Second");
}, 1000);


setTimeout(() => console.log("Hello World Third"), 500);


var printHello4 = function(){
    console.log("Hello World Fourth");
}

setTimeout(printHello4, 100);

