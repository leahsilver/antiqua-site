var Art = require("../models/art");
exports.get_arts = function (req, res, next) {
  console.log("server");
  Art.find().exec(function (err, list) {
    if (err) return next(err);
    res.send(list);
  });
};
exports.update_arts = function (req, res, next) {
  Art.findByIdAndUpdate(
    req.body._id,
    req.body,
    function (err, old, updated) {
      if (err) return next(err);
      res.send();
    }
  );
};
