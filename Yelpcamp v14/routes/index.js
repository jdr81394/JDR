var express = require('express');
var router = express.Router({mergeParams:true});
var User = require('../models/user');
var passport = require('passport');
var flash = require('connect-flash');



//root route
router.get('/', function(req,res){
    res.render('landing', {currentUser: req.user});
})

//show register form
router.get('/register', function(req,res){
    res.render('register');
});


//handle sign up logic
router.post('/register', function(req,res){
 var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err,user){
        if (err){
            //req flash is not working properly
            req.flash('error', err.message);
            return res.redirect('/register');
        } 
        passport.authenticate('local')(req, res, function(){
            req.flash('success', 'Welcome to YelpCamp' + user.username);
            res.redirect('/campgrounds');
        });
    } )
})

//show login form
router.get('/login', function(req,res){
    req.flash('error', 'Please log in!');
    res.render('login');
})

//handling login logic
router.post('/login', passport.authenticate('local', 
    {
        successRedirect: '/campgrounds',
        failureRedirect: '/login'
    }), function(req,res){
        
    });
    
//logout route
router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success','Logged you out!');
    res.redirect('/campgrounds');
})



module.exports = router;