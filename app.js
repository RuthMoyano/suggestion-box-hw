var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




const mongoose = require("mongoose")
mongoose
  .connect("mongodb://localhost:27017/suggestion-box-hw",{ useNewUrlParser: true ,useUnifiedTopology: true})
  .then(() => {
    console.log(`MONGO DB CONNECTED`);
  })
  .catch(function (e) {
    console.log(e);
  });



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var suggestionRouter = require('./routes/suggestions/suggestionRouter')
var app = express();



// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/suggestions',suggestionRouter)



  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
