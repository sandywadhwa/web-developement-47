var express = require('express');

var router = express.Router();

var userLib = require('./userLib');
router.get('/', function(req, res){
    console.log('Called /users/');

    userLib.getAllUsers(function(err, userObjJSONArray){
        if(err)
            res.json({'error': 'Error Occured '+err});
        else
            res.json(userObjJSONArray);
    })
});
router.post('/', function(req, res){

});
router.get('/:userid', function(req, res){

}, function(req, res){

});

/* Convenience
router.route('/')
    .get(function(req, res){

    })
    .post(function(req, res){

    });

*/

module.exports = router;