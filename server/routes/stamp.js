var express = require("express");
var router = express.Router();

var stamp_controller = require("../controllers/stampController");

router.get("/", stamp_controller.get_stamps);
router.post("/", stamp_controller.update_stamps);

module.exports = router;
