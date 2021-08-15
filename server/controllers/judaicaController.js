var Judaica = require("../models/judaica");
exports.get_judaicas = function (req, res, next) {
  console.log("server");
  Judaica.find().exec(function (err, list) {
    if (err) return next(err);
    res.send(list);
  });
};
exports.update_judaicas = function (req, res, next) {
  Judaica.findByIdAndUpdate(
    req.body._id,
    req.body,
    function (err, old, updated) {
      if (err) return next(err);
      res.send();
    }
  );
};
