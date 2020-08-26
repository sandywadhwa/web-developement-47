var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var userLib = require('./backend/lib/userLib');

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

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/pages/:page', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/html/'+req.params.page+'.html'))
})

app.get('/api/user', function(req, res){
    res.json({username: 'admin'});
})
app.post('/api/register', (req, res)=>{
    userLib.createUser(req.body, function(err, userObj){
        res.json({error: err, user: userObj});
    })
})
app.post('/api/login', (req, res)=>{
    userLib.loginUser(req.body, function(err, userObj){
        res.json({error: err, user: userObj});
    })
})

module.exports = app;
