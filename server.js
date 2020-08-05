// 1.  import or #include liek statement for express

var express = require('express');

// 2. Create Application
var app = express();

// Tell express where css and js files are there
app.use(express.static(__dirname+'/frontend'));
app.use(express.json()); // This will add query, params and body to req

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

app.use('*', function(req, res, next){
    console.log("REQUEST CAME, PASSING TO NEXT1 HANDLER");
    if(false){
        res.redirect('/');
        //return res.send('hello');
    }
    next();
}, function(req, res, next){
    console.log("REQUEST CAME, PASSING TO NEXT2 HANDLER");
    next();
})


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


app.get('/dashboard', function(req, res){

})
app.get('/profile', function(req, res){

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


/* Defining Routes for USER */
var users = [ {id: 1, name: 'Being Zero'}];
app.get('/api/users', function(req, res){
    res.json(users);
})

app.post('/api/users', function(req, res){
    var userObj = req.body;

    res.json({'error':'not implemeneted'});
})

app.get('/api/users/:userId', function(req, res){
    console.log(JSON.stringify(req.params));
    //console.log(req.params.userId);
    var user = {};
    for(var i=0;i<users.length;i++){
        if(users[i].id == req.params.userId){
            user = users[i];
        }
    }
    // Search a user with given id and return 
    res.json(user);
})

app.put('/api/users/:userId', function(req, res){
    res.json({'error':'not implemeneted'});
});

app.delete('/api/users/:userId', function(req, res){
    res.json({'error':'not implemeneted'});
});


// 4. Run Application on a port ==> 65xxx (65K ports) Mostly we use beyone 3000
var port= process.env.PORT  || 3000;

// Once site is up, function() will be called automatically
//app.listen(port, () => console.log("Site Running on http://localhost:"+port));
app.listen(port, () => console.log(`Site Running on http://localhost:${port}`));