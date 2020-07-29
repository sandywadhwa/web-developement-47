// 'use strict'

/*
    1.  console.log and process.stdout.write
    2.  Variable declaration
    3.  Data Types [typeof(x)] - number, boolean, string
    4.  Operators
    5.  Conditional Statements
    6.  Loops
*/


// var x = 5;

// COMMENTING OUT LINES -- SHORTCUTs
// CTRL + '/'   ===> WINDOW
// CMD + '/'    ===> MAC


// CONSOLE
// console.log(x);
// console.log('Hello');
// console.log("Hello");
// console.log("H");
// console.log('H');

// WITHOUT NEWLINE IN END
// process.stdout.write('Hello');
// process.stdout.write('World');
// process.stdout.write(x+'');


var x;
var y=null;     // Initialized variable - no value

// console.log(x);
// console.log(y);


var a = "this is a string";
var b = 12.34;
var c = true;
const d = 12;

b = 13.45;

// Assignment to a const is not allowed
// d = 14; 

// console.log(typeof(a) + " : " + a);
// console.log(typeof(b) + " : " + b);
// console.log(typeof(c) + " : " + c);
// console.log(typeof(d) + " : " + d);


var operatorCheck;

if(operatorCheck==undefined)
    console.log('operatorCheck is undefined');

if(operatorCheck==null)
    console.log('operatorCheck is null');

// Check value as well as data type
// Strict Check
// if(operatorCheck===undefined)
//     console.log('operatorCheck is undefined');

// if(operatorCheck===null)
//     console.log('operatorCheck is null');

// var test;
// if(!test)
//     console.log('This is false');

// var strCheck='';
// if(strCheck==='')
//     console.log("This is Empty String");

var x = 2**5;
// console.log(x);


var x = 2;

if(x == "2")
    console.log("This works");

if(x === "2")
    console.log("This doesn't work");