var userModel = require('../models/userModel');

module.exports.createUser = function(jsonUSER, cb){
    var user = new userModel(jsonUSER);
    user.save(function(err, userObj){
        cb(err, userObj);
    })
}

module.exports.loginUser = function(jsonUSER, cb){
    userModel.find(jsonUSER, function(err, userObjArray){
        cb(err, userObjArray[0]);
    })
}