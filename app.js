const createError  = require('http-errors');
const express      = require('express');
const path         = require('path');
const cookieParser = require('cookie-parser');
const logger       = require('morgan');
const passport     = require('passport');
const bodyParser   = require('body-parser');
const session      = require("express-session");
const cors         = require('cors')

const app          = express();

// add dotenv module
require('dotenv').config()

const indexRouter = require('./routes/index');
const apiRouter   = require('./routes/api');
const authRouter  = require('./routes/auth');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// require('./config').init(app)
require('./config')
const auth = passport.authenticate('bearer', {session: false});

app.use('/api', auth, apiRouter);
app.use('/auth', authRouter);
app.use('/', indexRouter);

//catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function(err, req, res, next) {

  console.log('err handler', err)
  // set locals, only providing error in development
  res.locals.message = err.sqlMessage || err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // if(err.status === 401) {
  //   return res.redirect('/auth/login')
  // }

  // render the error page
  // res.status(err.status || 500);
  res.status(err.status || 500).send(err)
  // res.render('error');
});

module.exports = app;
