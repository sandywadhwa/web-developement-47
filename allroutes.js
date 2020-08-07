var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    console.log('Called /users/');
    res.send('GET CALL');
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