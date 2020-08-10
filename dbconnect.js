var mongoose = require('mongoose');

module.exports = 
{
    connect : function(){
        // srv+mongodb://
        var connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/userdb';
        var optionsJSON = {   useNewUrlParser: true, useUnifiedTopology: true };
        mongoose.connect(connectionString, optionsJSON);

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