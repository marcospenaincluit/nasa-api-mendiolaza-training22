require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const config = require('config');

const indexRouter = require('./routes/index');
const nasaRouter = require('./routes/nasa.router');
const usersRouter = require('./routes/users.router');
const mongoConnectionString = config.get('dataBase.host')
const app = express();

const mongoose = require('mongoose');
mongoose
  .connect(mongoConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to MONGODB"))
  .catch((err) => {
    console.error(err);
    throw err;
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/nasa', nasaRouter);
app.use('/users', usersRouter);


module.exports = app;
