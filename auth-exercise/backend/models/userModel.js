var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: String,
    username : String,
    password: String
});

module.exports = mongoose.model('user', userSchema);