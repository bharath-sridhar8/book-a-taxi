const express = require("express");

const app = express();
const morgan = require("morgan");
const indexRouter = require("./api/index");
const usersRouter = require("./api/users");
const ridesRouter = require("./api/rides");
const driversRouter = require("./api/drivers");
const logger = require("./config/winston");


// app.use(morgan('dev'))
app.use(morgan("combined", { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/rides", ridesRouter);
app.use("/drivers", driversRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  logger.error(`Route Not Found : ${req.path}`);
  res.status(400).send('Requested resource not found');
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // render the error page
  res.status(err.status || 500).send(err.message);
  logger.error(err)
});

module.exports = app