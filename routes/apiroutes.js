module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
  
    app.get("/api/workouts", function(req, res) {
        res.json();
      });
    
      app.get("/api/workouts/range", function(req, res) {
        res.json();
      });
    
      // API POST Requests
      // Below code handles when a user submits a form and thus submits data to the server.
    
      app.put("/api/workouts/:id", function(req, res) {
          console.log(req);
          res.json();
      });

  };