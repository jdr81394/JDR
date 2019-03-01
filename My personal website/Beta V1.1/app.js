var express = require('express'),
app = express(),
bodyParser    = require('body-parser'),
mongoose      = require("mongoose"),
passport = require('passport'),
flash = require('connect-flash'),
methodOverride = require('method-override'),
LocalStrategy = require('passport-local'),
// nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/my-site_v1_1', {useNewUrlParser: true});
//index
app.get('/',function(req,res){
  res.render('home')
})



app.listen(3000, function(){
    console.log("Your personal website has started")

});
