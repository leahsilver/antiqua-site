var express = require("express");
var router = express.Router();

var forum_controller = require("../controllers/forumController");

router.post("/", forum_controller.post_forums);

router.get("/", forum_controller.get_forums);

router.delete("/", forum_controller.delete_forums);

module.exports = router;