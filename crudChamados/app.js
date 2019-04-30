var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

// Conexão MongoDB Atlas (Cloud)
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://lvneves2010:Gustavo0801@cluster0-m9sca.mongodb.net/testIBM?retryWrites=true')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// Conexão Mongo DB localhost
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/testeIBM')
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

var apiRouter = require('./routes/chamado');

var app = express();
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, DELETE, PUT");

	next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/testeIBM')));
app.use('/chamados', express.static(path.join(__dirname, 'dist/testeIBM')));
app.use('/chamado-details/:id', express.static(path.join(__dirname, 'dist/testeIBM')));
app.use('/chamado-create', express.static(path.join(__dirname, 'dist/testeIBM')));
app.use('/chamado-edit/:id', express.static(path.join(__dirname, 'dist/testeIBM')));
app.use('/api', apiRouter);

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
  res.send(err.status);
});

module.exports = app;
