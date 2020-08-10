var express = require('express');

var router = express.Router();

var userLib = require('./backend/lib/userLib');
router.get('/', function(req, res){
    console.log('Called /users/');
    userLib.getAllUsers(function(err, arrayOfUsers){
        res.json(arrayOfUsers);
    })
});
router.post('/', function(req, res){
    console.log("USER DATA RECEIEVED FROM FRONT END "+JSON.stringify(req.body));
    userLib.createUser(req.body, function(err, userObj){
        if(err)
            res.json({'ERROR' : err});
        else
            res.json(userObj);
    })
});


router.route('/:userId')
    .delete(function(req, res){
        console.log(JSON.stringify(req.params));
        userLib.deleteUser(req.params.userId, function(err, obj){
            res.json(obj);
        })
    })
    .put(function(req, res){
        userLib.updateUser(req.params.userId, req.body, function(err, obj){
            res.json(obj);
        })
    });

/* Convenience
router.route('/')
    .get(function(req, res){

    })
    .post(function(req, res){

    });

*/

module.exports = router;