var express = require("express");
var router = express.Router();

var subject_controller = require("../controllers/subjectController");

router.get("/", subject_controller.get_subjects);
router.post("/", subject_controller.post_subjects);
router.put("/", subject_controller.update_subjects);

module.exports = router;
