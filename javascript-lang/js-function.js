/*
    function name(inpt){

    }

    var a = function(inp){
        ...
    }

    var b = (inp) => {
        
    }
*/

// C or Java
// int add(int a, int b);


// Declaring function
function add(a, b, c){
    return a+b;
}

// Calling the Function
// JS allows calling function with less parameters
var ans = add(34, 56);

console.log(ans);


// Functions can be treated like variables
// A function declared without name is called
// Anonymous Function
// function(ipt){ ... }
var prodFunction = function(a, b){
    return a * b;
}


var prodAns = prodFunction(34, 54);



// New Syntax for anonymous Function
var prodDunction = (a, b) => {
    return a*b;
}


app.get('/', indexHandler);

app.get('/new-index', function(req, res){
    res.sendFile(__dirname+'/frontend/html/new-index.html');
})
