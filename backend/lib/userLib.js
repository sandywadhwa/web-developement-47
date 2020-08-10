/* All Function need a UserModel object to talk to DB*/

const userModel = require('../db/models/userModel');

module.exports = {
    /* 
        Expecting userObj to have strucure
        {
            username : ''
        }
    */
    createUser: function(userObject, cb){
        var user = new userModel(userObject);
        user.save(function(err, obj){
            console.log('SAVED USER '+JSON.stringify(obj));
            cb(err, obj);
        })
    },
    getAllUsers : function(cb){
        var query = {isDeleted : {$ne : true}};
        //query = {$or : [{isDeleted : false}, {isDeleted : null} ]};
        userModel.find(query, function(err, allUsers){
            cb(err, allUsers);
        })
    },
    getSingleUser : function(id, cb){
        userModel.findById(id, function(err, userObj){
            cb(err, userObj);
        });
    },
    updateUser : function(id, inputUserObj, cb){
        // userModel.findById(id, function(err, dbUserObj){
        //     // {name : 'est', age: 20}
        //     for(var p in inputUserObj){
        //         dbUserObj[p] = inputUserObj[p];
        //     }
        // });
        userModel.findByIdAndUpdate(id, inputUserObj, {useFindAndModify: true}, function(err, obj){
            cb(err, obj);
        })
    },
    deleteUser : function(id, cb){
        // userModel.findByIdAndDelete(id, function(err, userObj){

        // })

        // SOFT DELETE
        userModel.findById(id, function(err, userObj){
            if(userObj){
                userObj.isDeleted  = true;
                userObj.save(function(err, obj){
                    cb(null, {'message': 'User Deleted'});
                })
            }
        })
    }
}