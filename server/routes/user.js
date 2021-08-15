var express = require("express");
var router = express.Router();

var user_controller = require("../controllers/userController");

router.get("/", user_controller.get_users);
router.post("/", user_controller.post_users);
router.put("/", user_controller.update_users);

module.exports = router;
