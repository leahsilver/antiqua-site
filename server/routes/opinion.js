var express = require("express");
var router = express.Router();

var opinion_controller = require("../controllers/opinionController");

router.get("/", opinion_controller.get_opinions);
router.post("/", opinion_controller.post_opinions);

module.exports = router;
