const router = require("express").Router();


const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({
      day: 1
    })
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({
  body
}, res) => {
  Workout.create(body)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.insertMany(body)
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  Workout.update({
    _id: req.params.id
  }, {
    $set: {
      exercises: [req.body]
    }
  }).then((workoutdb) => {
    res.json(workoutdb);
  });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then(workoutdb => {
      res.json(workoutdb);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;