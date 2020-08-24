const authModel = require('../db/models/authModel');

module.exports.registerUser = function(userJSONObj, cb){

    // TODO:  Validate that username and email are present in json

    var newUser = new authModel(userJSONObj);

    // Create a user in DB
    newUser.save(function(err, userObj){
        cb(err, userObj);
    })
    // If user already exists, return error in callback function
    // cb(err, userObj)
}

module.exports.loginUser = function(userJSONObj, cb){
    // Validate username and password in DB
    // If user is valid , return userObj
    // Otherwise Return Error
    // cb(err, userObj)
}