// const router = require("express").Router();
const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
                console.log("This is workout data: - ", dbWorkout);

                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        console.log(req.body);
        console.log(req.params)
        db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then(dbWorkout => {
                console.log(req.body)
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.status(400).json(err);
            });
    })

}