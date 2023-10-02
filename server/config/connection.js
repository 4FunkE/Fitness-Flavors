const mongoose = require('mongoose');

// Connect to the MongoDB database using the provided MONGODB_URI or a local default URL
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fitnessFlavors_Db',
  {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine
  }
);

module.exports = mongoose.connection;

