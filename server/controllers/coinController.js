var Coin = require("../models/coin");
exports.get_coins = function (req, res, next) {
  console.log("server");
  Coin.find().exec(function (err, list) {
    if (err) return next(err);
    res.send(list);
  });
};
exports.update_coins = function (req, res, next) {
  Coin.findByIdAndUpdate(
    req.body._id,
    req.body,
    function (err, old, updated) {
      if (err) return next(err);
      res.send();
    }
  );
};
