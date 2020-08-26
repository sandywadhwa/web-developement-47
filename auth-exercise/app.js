var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var userLib = require('./backend/lib/userLib');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://localhost:27017/authDB', {});
mongoose.connection.on('open', function(){
    console.log("MongoDB Connected 1");
})
mongoose.connection.on('open', function(){
    console.log("MongoDB Connected 2");
})


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'this is a secret',
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(function(req, res, next){
    console.log("SESSION: "+JSON.stringify(req.session));
    next();
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/pages/profile', function(req, res, next){
    if(!req.session.user)
        return res.redirect('/pages/login');
    else
       next();
})
app.get('/pages/:page', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/html/'+req.params.page+'.html'))
})

app.get('/api/user', function(req, res){
    if(req.session && req.session.user)
        res.json(req.session.user);
    else
        res.json(null);
})

app.post('/api/register', (req, res)=>{
    userLib.createUser(req.body, function(err, userObj){
        req.session.user = userObj;
        //res.json({error: err, user: userObj});
        res.redirect('/pages/profile');
    })
})
app.post('/api/login', (req, res)=>{
    userLib.loginUser(req.body, function(err, userObj){
        /* Initialize the session */
        req.session.user = userObj;
        //res.json({error: err, user: userObj});
        res.redirect('/pages/profile');
    })
})

app.post('/api/logout', (req, res)=>{
    if(req.session.user)
        req.session.destroy();
    res.redirect({redirectUrl:'/pages/login'});
})

module.exports = app;
