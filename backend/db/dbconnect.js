const mongoose = require('mongoose');
const configLib = require('../lib/configLib');
module.exports = 
{
    connect : function(){
        // srv+mongodb://
        var optionsJSON = {   useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true };
        mongoose.connect(configLib.mongodb_connection_string, optionsJSON);

        var connectionObj = mongoose.connection;

        connectionObj.on('connected', function(){
            console.log("CONNECTED TO DB");
        })

        connectionObj.on('disconnected', function(){
            console.log("DISCONNECTED FROM DB");
        })

        connectionObj.on('error', function(err){
            console.log("ERROR: "+err);
        })
    },
    disconnect : function(){
        mongoose.disconnect();   
    }
}