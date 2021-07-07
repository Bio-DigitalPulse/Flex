// Express Router 
const router = require("express").Router();
// Access static files
const path = require("path");

// Creates html routes
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;