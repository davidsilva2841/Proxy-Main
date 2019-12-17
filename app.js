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
    // app.use('/', express.static(path.join(__dirname, 'public')));
    app.use('/products', express.static(path.join(__dirname, 'routes/public')));
    app.use('/products/:id?', express.static(path.join(__dirname, 'routes/public')));

    // Routes for testing
    app.use('/testing/:id?', express.static(path.join(__dirname, 'routes/testing/public/')));
    app.use('/testing-navbar/:id?', express.static(path.join(__dirname, 'routes/testing/navbar/')));
    app.use('/testing-product-info/:id?', express.static(path.join(__dirname, 'routes/testing/product_info/')));
    app.use('/testing-image-feature/:id?', express.static(path.join(__dirname, 'routes/testing/image_feature/')));
    app.use('/testing-carousel/:id?', express.static(path.join(__dirname, 'routes/testing/carousel/')));
    app.use('/testing-accordion-drawers/:id?', express.static(path.join(__dirname, 'routes/testing/accordion_drawers/')));
    app.use('/testing-footer/:id?', express.static(path.join(__dirname, 'routes/testing/footer/')));
} else if (process.env.NODE_ENV === 'development') {
    app.use('/', express.static(path.join(__dirname, 'public_testing')));
}


app.get('/', (req, res) => {
    res.redirect('/products/1')
});

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


