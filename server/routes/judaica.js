var express = require("express");
var router = express.Router();

var judaica_controller = require("../controllers/judaicaController");

router.get("/", judaica_controller.get_judaicas);
router.post("/", judaica_controller.update_judaicas);


module.exports = router;