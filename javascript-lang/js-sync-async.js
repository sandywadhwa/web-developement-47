// SYNC ===> Wait unless function returns
// ASYNC ==> Call function, and continue next line of code


function add(a, b){
    return a+b;
}

// Waiting to move forward
// Unless add function returns
var ans = add(3, 5);
console.log(ans);


// ASYNC
// Once done, do not return a value
// Call our function back
function addAsync(a, b, callbackFunction){
    callbackFunction(a+b);

    /*
    Callback function will be called after 5 seconds
    setTimeout(function(){
        callbackFunction(a+b);
    }, 5000);
    */
}

// Call
addAsync(4, 5, function(ans){
    console.log(`ASYNC FUNCTION RETURNED THE ANS: ${ans}`)
})
console.log("NEXT LINE");

// BROWSER ====> API CALL TO SERVER
// App can continue to work without return value