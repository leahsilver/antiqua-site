var Subject = require("../models/subject");
exports.get_subjects = function (req, res, next) {
  console.log("server");
  Subject.find().exec(function (err, list) {
    if (err) return next(err);
    res.send(list);
  });
};

exports.post_subjects = function (req, res, next) {
  var subject = new Subject(req.body);
  subject.save(function (err) {
    if (err) return next(err);
    res.send(subject);
  });
};



exports.update_subjects = function (req, res, next) {
  Subject.findByIdAndUpdate(
    req.body._id,
    req.body,
    function (err, old, updated) {
      if (err) return next(err);
      res.send();
    }
  );
};
