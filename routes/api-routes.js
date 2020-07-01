// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
const mongojs = require("mongojs");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all workouts
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });

  // GET route for getting workouts in the last 7 days
    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).limit(7)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        });
    });    


    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create(body)
        .then(dbWorkout => {
          res.json(dbWorkout);
        })
        .catch(err => {
          res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {      
        // db.Workout.findByIdAndUpdate({"_id": mongojs.ObjectId(req.params.id)},{$set:{"exercises":req.body}}, (err, data) => {     
        db.Workout.findByIdAndUpdate({"_id": mongojs.ObjectId(req.params.id)},{$push: {"exercises":req.body}}, {new: true}, (err, data) => {                 
            if (err) {
              console.log(err);
            } else {
              res.json(data);
            }
        }); 
    });  

};
