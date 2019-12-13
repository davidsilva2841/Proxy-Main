var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'public')));
    app.use('/products', express.static(path.join(__dirname, 'public')));
    app.use('/products/:id?', express.static(path.join(__dirname, 'public')));
    app.use('/testing-image-feature/:id?', express.static(path.join(__dirname, 'testing/image_feature/')));

    // app.get('/products/:id', express.static(path.join(__dirname, 'public')));
} else if (process.env.NODE_ENV === 'development') {
    app.use('/', express.static(path.join(__dirname, 'public_testing')));
}

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
  // res.render('error');
  res.send('error');
});

module.exports = app;


