var User = require("../models/user");
exports.get_users = function (req, res, next) {
  User.find().exec(function (err, list) {
    if (err) return next(err);
    res.send(list);
  });
};

exports.post_users = function (req, res, next) {
  var user = new User(req.body);
  user.save(function (err) {
    if (err) return next(err);
    res.send(user);
  });
};

exports.update_users = function (req, res, next) {
    console.log(req.body);
  User.findByIdAndUpdate(req.body._id, req.body, function (err, old, updated) {
    if (err) return next(err);
    res.send();
  });
};
