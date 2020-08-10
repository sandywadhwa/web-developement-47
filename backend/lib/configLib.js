module.exports = {
    port: process.env.PORT || 3000,
    mongodb_connection_string: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017/userdb'
}