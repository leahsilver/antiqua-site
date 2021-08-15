var express = require("express");
var router = express.Router();

var art_controller = require("../controllers/artController");

router.get("/", art_controller.get_arts);
router.post("/", art_controller.update_arts);


module.exports = router;