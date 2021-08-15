var Stamp = require("../models/stamp");
exports.get_stamps = function (req, res, next) {
  console.log("server");
  Stamp.find().exec(function (err, list) {
    if (err) return next(err);
    res.send(list);
  });
};

exports.update_stamps = function (req, res, next) {
  Stamp.findByIdAndUpdate(
    req.body._id,
    req.body,
    function (err, old, updated) {
      if (err) return next(err);
      res.send();
    }
  );
};
