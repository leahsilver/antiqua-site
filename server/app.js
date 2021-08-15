var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var artRouter = require("./routes/art");
var judaicaRouter = require("./routes/judaica");
var coinRouter = require("./routes/coin");
var stampRouter = require("./routes/stamp");
var forumRouter = require("./routes/forum");
var subjectRouter = require("./routes/subject");
var userRouter = require("./routes/user");
var opinionRouter = require("./routes/opinion");

const { delete_order } = require("./controllers/orderController");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//var mongoDb = 'mongodb://localhost:27017/express_library';
var mongoDb =
  "mongodb+srv://user:iam18leah@antiqua.gpotp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
var BodyParser = require("body-parser");
var cors = require("cors");
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.use(cors());
app.use("/", indexRouter);
app.use("/art", artRouter);
app.use("/judaica", judaicaRouter);
app.use("/coin", coinRouter);
app.use("/stamp", stampRouter);
app.use("/forum", forumRouter);
app.use("/subject", subjectRouter);
app.use("/user", userRouter);
app.use("/opinion", opinionRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
