const mongoose = require('mongoose');
require('dotenv').config();

/**
 * ---------- SET-UP MONGODB --------------------------
 */
 mongoose.connect(process.env.DB_STRING, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });
 const connection = mongoose.connection;
 connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

 // Expose the connection
 module.exports = connection;