var express = require('express');
var path = require('path');
var allRoutes = require('./allroutes');
var app = express();
var fs = require('fs');
const authLib = require('./backend/lib/authLib');

/* Connect to DB*/
var dbconnect = require('./backend/db/dbconnect');
dbconnect.connect();

// Middleware that'll get body from request
// And add it to req.body
app.use(express.json());
app.use(express.static(path.join(__dirname, 'frontend')));
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

// app.use('/', function(req, res, next){
//     res.sendFile(path.join(__dirname, '/frontend/html/index.html'));
//     console.log('User Request for Home Page '+new Date());
//     next();
// })

/*
    req
*/
app.get('/', function(req, res){
    res.redirect('/index');
    // console.log("HEADERS: " + JSON.stringify(req.headers));
    // console.log("QUERY: " + JSON.stringify(req.query));
    // res.send('This is my first response');
})

console.log('COMPANY: '+app.get('company-name'));

app.get('/users/:id/addresses/:addrid', function(req, res){
    console.log("HEADERS: " + JSON.stringify(req.headers));
    console.log("QUERY: " + JSON.stringify(req.query));
    console.log("PARAMS: "+ JSON.stringify(req.params));
})

app.post('/api/auth/register', function(req, res){
    console.log("BODY: "+ JSON.stringify(req.body));
    authLib.registerUser(req.body, function(err, userObj){
        res.json({err: err, user: userObj})
    })
})

function isAuthenticated(req, res, next){
    // if valid
        next();
    // else
        res.redirect('/login');
}


app.use('/api/users', isAuthenticated , allRoutes);



// DEFINE ONE ROUT FOR ALL HTML PAGES
app.get('/:pagename', (req, res)=>{
    var pn = req.params.pagename;
    console.log("PAGENAME: "+pn);
    var pageFilePath = path.join(__dirname, 'frontend', 'html', pn+".html");
    if(!fs.existsSync(pageFilePath))
        res.sendFile(path.join(__dirname, 'frontend', 'html', "404.html"));
    else
        res.sendFile(pageFilePath);
});

var port = app.get('port');
app.listen(port,  function(){
    console.log(`Started to listen on http://localhost:${port}`)
});