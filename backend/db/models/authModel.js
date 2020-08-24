const mongoose = require('mongoose');

var authSchema = new mongoose.Schema({
    userName : {type: String, unique: true, required: true},
    password : String,
    email: {type: String, unique: true, required: true}
}, {
    timestamps :true
});

//bcrypt ===> Used to created encypted hashed password

authSchema.pre('save', function(next){
    console.log("PRE-SAVE HOOK");
    // If we want to convert password to encrypted passwd
    // this.password  = encryptPassword(this.password);
    //this.createdAt = new Date();

    next();
})

// We can add new functions to Schema
// These functions can be used by authLib
// using model object
// authSchema.methods.validateUser = function(){

// }


module.exports = mongoose.model('auth', authSchema);