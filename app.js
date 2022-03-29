var express = require('express');
var path = require('path');
const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://chhama:parmar@cluster0.fznjr.mongodb.net/AngularApi?retryWrites=true&w=majority")
var indexRouter = require('./routes/index');


var app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);



app.listen(3000,()=>{
  console.log("server started");
});
module.exports = app;
