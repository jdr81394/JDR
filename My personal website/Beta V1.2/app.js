var express = require('express'),
app = express(),
bodyParser    = require('body-parser'),
mongoose      = require("mongoose"),
passport = require('passport'),
flash = require('connect-flash'),
methodOverride = require('method-override'),
Blog = require('./models/blog.js'),
LocalStrategy = require('passport-local');
// nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));


mongoose.connect('mongodb://localhost/my-site_v1_2', {useNewUrlParser: true});

// //require routes
// var blogRoutes = require('./routes/blogRoutes')
//

//index
app.get('/',function(req,res){
  res.render('home')
});

//blog routes
//index
app.get('/blog', function(req,res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    }
    res.send('hi');
      // res.render('blog', {blogs:blogs});
  });
})

app.listen(3000, function(){
    console.log("Your personal website has started")

});
