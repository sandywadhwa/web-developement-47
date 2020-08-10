var express = require('express');
var allRoutes = require('./allroutes');
var app = express();

/* Connect to DB*/
var dbconnect = require('./backend/db/dbconnect');
dbconnect.connect();

// Middleware that'll get body from request
// And add it to req.body
app.use(express.json());
// app.use(express.urlencoded({extended: true}));

/*
    Express Application Object

    1. app.listen(port, callbackFunction)
    2. var val = app.get(var)
    3. app.set(var, value)
    3. app.use()    ===> MiddleWares
    4. app.METHOD
        get     // RETRIEVE
        put     // UPDATE
        post    // CREATE
        delete  // DELETE

        get('/', function(req, res, next){

        })
*/

const configLib = require('./backend/lib/configLib');
app.set('company-name', 'Being Zero');
app.set('port', configLib.port);

app.use('/', function(req, res, next){
    console.log('User Request for Home Page '+new Date());
    next();
})

/*
    req
*/
app.get('/', function(req, res){
    console.log("HEADERS: " + JSON.stringify(req.headers));
    console.log("QUERY: " + JSON.stringify(req.query));
    res.send('This is my first response');
})

console.log('COMPANY: '+app.get('company-name'));

app.get('/users/:id/addresses/:addrid', function(req, res){
    console.log("HEADERS: " + JSON.stringify(req.headers));
    console.log("QUERY: " + JSON.stringify(req.query));
    console.log("PARAMS: "+ JSON.stringify(req.params));
})


app.use('/api/users', allRoutes);


var port = app.get('port');
app.listen(port,  function(){
    console.log(`Started to listen on http://localhost:${port}`)
});