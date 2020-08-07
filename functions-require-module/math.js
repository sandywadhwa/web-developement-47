module.exports.addSync = function(a, b){
    return a+b;
}

/* We call a function back rather than returning a value*/

/*callback function should take two params:
1.  err
2.  result
*/

module.exports.addAsync = function(a, b, callbackFunction){
    callbackFunction(null, a+b);
}

module.exports.divAsync = function(a, b, callbackFunction){
    if(b==0)
        callbackFunction('cant divide by zero', -1);
    else
        callbackFunction(null, a/b);
}


