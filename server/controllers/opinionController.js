var Opinion = require("../models/opinion");
exports.get_opinions = function (req, res, next) {
  Opinion.find().exec(function (err, list) {
    if (err) return next(err);
    res.send(list);
  });
};

exports.post_opinions = function (req, res, next) {
  console.log(req.body);
  var opinion = new Opinion(req.body);
  opinion.save(function (err) {
    if (err) return next(err);
    res.send(opinion);
  });
};
