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

module.exports.getUser = function(userId, cb){
    userModel.findById(userId, function(err, userObj){
        // Do not return password back to front end
        delete userObj.password;
        // For JSON OBJ
        //delete jsonObj.property
        cb(err, userObj);
    })
}