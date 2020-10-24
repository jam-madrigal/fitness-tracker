// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');

// Default port
const PORT = process.env.PORT || 3000;

// Telling node an express server is being created
const app = express();

// Sets up the Express app to handle data parsing and middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Connect to the mongodb database
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/fitness-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

// Checking success of the connection to mongodb
const connectionSuccess = mongoose.connection
connectionSuccess.once('open', _ => {
  console.log('Database connected:', 'mongodb://localhost/fitness-tracker')
})



// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// Listener to start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});