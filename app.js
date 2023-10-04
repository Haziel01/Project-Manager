const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const userLogRouter = require('./routes/userLog');
const addressRouter = require('./routes/addresses');
const skillsRouter = require('./routes/skills');
const panelRouter = require('./routes/controlPanel');
const projectRouter = require('./routes/proyects');
const productbacklogRouter = require('./routes/productBacklogs');
const releasebacklogRouter = require("./routes/releaseBacklogs");
const retrospectiveRouter = require("./routes/retrosprective");
const sprintbacklogRouter = require("./routes/sprintBacklogs");
const historyCardRouter = require("./routes/historyCard");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userLogs', userLogRouter);
app.use('/addresses', addressRouter);
app.use('/skills', skillsRouter);
app.use('/controlPanel', panelRouter);
app.use('/projects', projectRouter);
app.use('/prodcutBacklogs', productbacklogRouter);
app.use("/releaseBacklogs", releasebacklogRouter);
app.use("/retrospective", retrospectiveRouter);
app.use("/sprintBacklogs", sprintbacklogRouter);
app.use("/historyCard", historyCardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
