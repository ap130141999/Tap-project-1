// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
// const express = require('express');
// const  connectToDatabase  = require('./routes/enumController');


// Connect Database

const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const port = 3000;
const dbName = "credit_guardians";
const collectionName = "dynamic_enum";
let client = "";

const url = `mongodb+srv://Abhilash:1289@development.j5amt.mongodb.net/credit_guardians?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
    console.log("Connected to the database");
    client = await MongoClient.connect(url);
}

app.get('/', async (req, res) => {
    const collection = client.db(dbName).collection(collectionName);
    const response = await collection.find().toArray();
    res.send(JSON.stringify(response));
})

connectToDatabase();

app.listen(3001);