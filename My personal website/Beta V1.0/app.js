var express = require('express'),
app = express(),
bodyParser    = require('body-parser'),
mongoose      = require("mongoose"),
passport = require('passport'),
flash = require('connect-flash'),
methodOverride = require('method-override'),
LocalStrategy = require('passport-local');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');


//index
app.get('/',function(req,res){
  res.render('home')
})

//About
app.get('/about',function(req,res){
  res.render('about');
})

app.listen(3000, function(){
    console.log("Your personal website has started")

});
