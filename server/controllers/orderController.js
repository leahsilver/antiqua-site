var mailService = require("../services/mailService");
var Order = require("../models/order");
var Author = require("../models/author");

exports.get_orders = function (req, res, next) {
  Order.find()
    .populate("author")
    .exec(function (err, list) {
      if (err) return next(err);
      res.send(list);
    });
};

exports.get_create_order = function (req, res) {
  res.send(`NI: get create\n order id is: ${req.params.orderId}`);
};

exports.email = function (req, res) {
  mailService.email();
  res.send("sent email");
};

exports.post_create_order = function (req, res, next) {
  var order = new Order({
    name: req.body.name,
    author: req.body.author,
  });

  order.save(function (err) {
    if (err) return next(err);
    res.send(order);
  });
};

exports.get_create_order = function (req, res, next) {
  console.log("ther params are ", req);
  var order = new Order({
    name: req.query.name,
    author: req.query.author,
  });

  order.save(function (err) {
    if (err) return next(err);
    res.send(order);
  });
};

exports.delete_order = function (req, res, next) {
  console.log("will delete ", req.params.orderId);
  Order.findByIdAndDelete(req.params.orderId, function (err) {
    if (err) return next(err);
    res.send();
  });
};

exports.update_order = function (req, res, next) {
  Order.findByIdAndUpdate(
    req.params.orderId,
    req.body,
    function (err, old, updated) {
      if (err) return next(err);
      res.send();
    }
  );
};
