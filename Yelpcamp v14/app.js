var express       = require("express"),
    app           = express(),
    bodyParser    = require('body-parser'),
    mongoose      = require("mongoose"),
    Campground    = require('./models/campground'),
    Comment = require('./models/comment'),
    seedDB  = require('./seeds'),
    passport = require('passport'),
    User = require('./models/user'),
    flash = require('connect-flash'),
    methodOverride = require('method-override'),
    LocalStrategy = require('passport-local');
    
//requiring routes    
var campgroundRoutes = require('./routes/campgrounds');
var commentRoutes = require('./routes/comments');
var indexRoutes = require('./routes/index');


console.log(process.env.DATABASEURL);
var url = process.env.DATABASEURL || 'mongodb://localhost/yelp_camp_v14'
mongoose.connect(url);
// seedDB(); //seed the database
// mongoose.connect("mongodb://Jake:Bbknights1!@ds113845.mlab.com:13845/yelpcamp1", { useNewUrlParser: true })
mongoose.connect("mongodb://localhost/yelp_camp_v14", { useNewUrlParser: true })

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(flash());


// PASSPORT CONFIGURATION
app.use(require('express-session')({
    secret: "Shitzhus are so cute!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// {message:req.flash('error')}

app.use(function(req,res,next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
})

app.use('/',indexRoutes);
app.use('/campgrounds/:id/comments',commentRoutes);
app.use('/campgrounds',campgroundRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});