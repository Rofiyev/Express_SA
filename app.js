const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books");

const app = express();

// Mongoose Connection config
mongoose.connect("mongodb://127.0.0.1:27017/books", {
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
mongoose.connection.on("open", () => {
  console.log("MongoDB connected!");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/books", booksRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`✅ Server running on port ${port}... connecting to MongoDB!`)
);

module.exports = app;
