module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link

// Importing models needed to update exercises
const Cardio = require('../models/cardio.js')
const Resistance = require('../models/resistance.js')


    // Retrieve the last workout
    app.get("/api/workouts", function(req, res) {
        res.json();
      });

    // Get all the workouts from the db
      app.get("/api/workouts/range", function(req, res) {
        res.json();
      });
    
      // API POST Requests
      // Below code handles when a user submits a form and thus submits data to the server.
      
    // Create a new workout
      app.post("/api/workouts", function(req, res) {

        res.json();
      });

    // API PUT requests to update add a new exercise to a workout in the db
      app.put("/api/workouts/:id", function(req, res) {
          console.log(req.body);
          res.json();
      });

  };