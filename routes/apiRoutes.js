const router = require("express").Router();


const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([{
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }])
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

// router.post("/api/workouts", (req, res) => {
//   Workout.insertMany(body)
//     .then(workoutdb => {
//       res.json(workoutdb);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body)
  Workout.findByIdAndUpdate({
    _id: req.params.id
  }, {
    $push: {
      exercises: req.body
    }
  }, {
    new: true,
    runValidators: true
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