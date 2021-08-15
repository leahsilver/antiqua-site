var express = require("express");
var router = express.Router();

var coin_controller = require("../controllers/coinController");

router.get("/", coin_controller.get_coins);
router.post("/", coin_controller.update_coins);


module.exports = router;