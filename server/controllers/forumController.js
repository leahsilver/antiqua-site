var Forum = require("../models/forum");
exports.get_forums = function (req, res, next) {
  console.log("server");
  Forum.find().exec(function (err, list) {
    if (err) return next(err);
    res.send(list);
  });
};

exports.post_forums = function (req, res, next) {
  var forum = new Forum({
    replay: req.body.replay,
    title: req.body.title,
    user: req.body.user,
    lastReply: req.body.lastReply,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  forum.save(function (err) {
    if (err) return next(err);
    res.send(forum);
  });
};

exports.delete_forums = function (req, res, next) {
  Forum.findByIdAndDelete(
    req.body._id,
    function (err, old, updated) {
      if (err) return next(err);
      res.send();
    }
  );
};


