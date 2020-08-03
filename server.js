// 1.  import or #include liek statement for express

var express = require('express');

// 2. Create Application
var app = express();

// Tell express where css and js files are there
app.use(express.static(__dirname+'/frontend'));

/* MIDDLEWARE */
app.use('/', function(req, res, next){
    console.log("Yeah I got request first, but i am not handling it");
    // if(i should handle this)
        // res.send('I handled this');
    // else
        next();
})

// 3.  Define Functiosn to run when someone accesses our site
var indexHandler = function(req, res){
    res.sendFile(__dirname+'/frontend/html/index.html');
};

app.get('/', indexHandler);

app.get('/new-index', function(req, res){
    res.sendFile(__dirname+'/frontend/html/new-index.html');
})


app.get('/text-tags', function(req, res){
    res.sendFile(__dirname+'/frontend/html/texttags.html');
})


app.get('/clock', function(req, res){
    res.sendFile(__dirname+'/frontend/html/clock.html');
})

var userObjects = [{
        'name' : 'Vekatesh',
        'email' : 'venkatesh@gmail.com'
    },
    {
        'name' : 'Kaushik',
        'email' : 'kaushik@gmail.com'
    },
    {
        'name' : 'Pranay',
        'email' : 'prana@gmail.com'
    }];


app.get('/ajax', function(req, res){
    res.sendFile(__dirname+'/frontend/html/ajax.html');
})


app.get('/jquery', function(req, res){
    res.sendFile(__dirname+'/frontend/html/jqueryown.html');
})


app.get('/api/students', function(req, res){
    /* Connect to DB */
    /* Get Data */
    /* Convert data to JSON */

    res.json(userObjects);
})

// 4. Run Application on a port ==> 65xxx (65K ports) Mostly we use beyone 3000
var port= process.env.PORT  || 3000;

// Once site is up, function() will be called automatically
//app.listen(port, () => console.log("Site Running on http://localhost:"+port));
app.listen(port, () => console.log(`Site Running on http://localhost:${port}`));