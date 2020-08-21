// Read File Contents

const fs = require('fs');
const userModel = require('../../backend/db/models/userModel');

var filePath = '../../frontend/html/ajax1.html';

// fs.readFile(filePath, function(err, result){
//     if(err)
//         console.log('ERROR: '+ err);
//     else
//         console.log(result.toString('utf8'));
// });


// ALREADY WRITTEN ASYNC FUNCTION
// WE NEED A WAY TO CALL IT SYNCHRONOUSLY


// ASYNC - AWAIT - PROMISE

var p = new Promise(function(successFunction, failureFunction){

});

var readFilePromised = new Promise(function(successFunction, failureFunction){
    fs.readFile(filePath, function(err, result){
        if(err)
           failureFunction(err);
        else
            successFunction(result.toString('utf8'));
    });
});




readFilePromised
    .then(function(data){
        console.log("FILE READ SUCCESSFULLY");
    })
    .catch(function(err){
        console.log("FILE READING FAILED");
    })


// $.ajax({

// })
// .then()
// .catch()


// WITHOUT PROMISE SYNTAX
userModel.find({}, function(err, userObjArray){

})


// WITH PROMISE SYNTAX
userModel.find({})
    .then(function(userObjArray){

    });


// CODE SUBMISSION
// code, testinput, expectedOuput
// {compilationResult: false, message: ''}

// 1.  Save code to a File
// 2.  Compile
// 3.  Save Test Input to a File
// 4.  Fun Code with Given input File
// 5.  Write Exp Output to File
// 6.  Read Actual Output File and Expected Output File and Compare
// 7.  Based on Comparison Send the results to callback function

// WITHOUT PRIMISE SYNTAX WILL BE LIKE THIS --- CALLBACK HELL
function subm(subObj, cb){
    saveCode(subObj, function(err, result){
        if(err)
            return cb({'error' : 'Save file failed'});
        subObj.filePath = 'test.cpp';

        compileCode(subObj, function(err, result){
            if(err)
                return cb({'compileResult' : false, 'compliationError' : err});

            runCode(subObj, function(err, result){
                if(subObj.expectedOutput != result.actualOuptut)
                    return cb({'executionResult' : false, actualOuptut: '', expectedOutput: ''})   

            })

        })
    })
}

// PROMISE WILL MAKE CALLING SYNTAX LIKE THIS

function subm(subObj, cb){
    saveCode
        .then(compileFunction)
        .then(runFunction)
        .then(compareFunction);
}