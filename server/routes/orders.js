var express = require("express");
var router = express.Router();

var order_controller = require("../controllers/orderController");

router.get("/", order_controller.get_orders);

router.get("/email", order_controller.email);

// router.get('/createOrder', order_controller.get_create_order);

router.post("/", order_controller.post_create_order);

router.delete("/:orderId", order_controller.delete_order);

router.patch("/:orderId", order_controller.update_order);

module.exports = router;
