const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose");
const { expressjwt } = require("express-jwt");
const config = require('config');
const i18n = require("i18n");

const indexRouter = require('./routes/index');
const teamMemberRouter = require('./routes/teamMember');
const boardsRouter = require('./routes/boards');
const columnsRouter = require('./routes/columns');
const proyectRecordRouter = require('./routes/proyectRecords');
const userHistoryRouter = require('./routes/userHistory');
const backlogsRouter = require('./routes/backlogs');

//jwt
const jwtKey = config.get('secret.key')
//conection to database
const uri = config.get('dbChain');
mongoose.connect(uri);
const db = mongoose.connection;

const app = express();

db.on('open',()=>{
  console.log("Conexion ok");
})
db.on('error',()=>{
  console.log("Conexion error");
})

i18n.configure({
  locales: ["es", "en"],
  directory: `${__dirname}/locales`,
  cookie: "lenguage",
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//protecion de rutas
// app.use(expressjwt({secret: jwtKey, algorithms: ['HS256']})
//   .unless({path: ['/login']}));

app.use('/', indexRouter);
app.use('/teamMember', teamMemberRouter);
app.use('/backlogs',backlogsRouter);
app.use('/boards',boardsRouter);
app.use('/columns',columnsRouter);
app.use('/proyectRecords',proyectRecordRouter);
app.use('/userHistory',userHistoryRouter);

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
