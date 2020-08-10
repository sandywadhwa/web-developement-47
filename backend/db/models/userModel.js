// Old JS, ECMA5, ECMA6, TypeScript

const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username : {type:String, unique: true, required: true},
    password: {type: String},
    age : Number,
    isMarried: Boolean,
    dateOfBirth : Date,
    languagesKnown : [String],
    addresses : [{
        line1: String,
        line2: String,
        zipCode : String
    }],
    isDeleted : Boolean,
    createdAt : Date,
    createdBy : String,
    updatedAt : Date,
    updatedBy : String
});

module.exports = mongoose.model('user', userSchema);