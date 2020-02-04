// const router = require("express").Router();
const workout = require("../models/workout.js");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        workout.find({}).then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        workout.findByIdAndUpdate(req.params.id, { $push: { excercise: req.body } })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts", (req, res) => {
        workout.create(req.body).then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })

    app.get("/api/workouts/range", (req, res) => {
        workout.find({}).then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })

}