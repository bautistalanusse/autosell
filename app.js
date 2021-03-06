var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const { flash } = require('express-flash-message');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products')
var securityRouter = require('./routes/security')
var addRouter = require('./routes/add')
var profileRouter = require('./routes/profile')
var searchRouter = require('./routes/search')
var editRouter = require('./routes/edit')
var demoRouter = require('./routes/demo')
var db = require('./database/models')
var productEditRouter = require('./routes/productEdit')
var borrarRouter = require('./routes/borrar')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( 
  { secret: 'basedatos_int',
    resave: false,
    saveUninitialized: true
  }))

const privateRoutes = [
  '/profile', '/profile-edit', '/product-add', '/product-edit'
]
app.use(flash());

// Middleware cookies
app.use(function(req, res, next){
  if(req.cookies.userId != undefined && req.session.user == undefined){
    db.Usuario.findByPk(req.cookies.userId)
    .then( user => {
      req.session.user = user;
      return next();
    })
    .catch( e => { next(createError(e.status)) })
  } else {
    next()
  }
})

// Middleware session
app.use(function(req, res, next){
  if(req.session.user != undefined){
    res.locals.user = req.session.user
  } else {
    if (privateRoutes.includes(req.path)) {
      return res.redirect('/login')
    }
  }
  next();
});

// get flash messages

app.use(async function (req, res, next) {
  res.locals.flash = {
    success: await req.consumeFlash('success'),
    info: await req.consumeFlash('info'),
    danger: await req.consumeFlash('danger'),
    warning: await req.consumeFlash('warning'),
  }
  next();
});




app.use('/', demoRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/', securityRouter);
app.use('/product-add', addRouter);
app.use('/profile', profileRouter);
app.use('/search-result', searchRouter);
app.use('/profile-edit', editRouter);
app.use('/product-edit', productEditRouter);
app.use('/delete', borrarRouter);



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
