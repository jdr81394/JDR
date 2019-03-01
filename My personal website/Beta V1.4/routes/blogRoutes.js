var express = require('express'),
router = express.Router({mergeParams:true}),
Blog = require('../models/blog.js');

//blog routes - REST
//index
router.get('/', function(req,res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    } else{
        res.render('blogs/index', {blogs:blogs});
    }
  });
})

//New
router.get('/new', function(req,res){
  res.render('blogs/new');
})

//Create - add new blogs to the database
router.post('/', function(req,res){
  //pull data off of form
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var date = req.body.date;
  var newBlog = {title:name, image:image, created:date, body:desc}
  //Take new blog post and save it to database
  Blog.create(newBlog, function(err, newlyCreatedBlog){
    if(err){
      console.log(err);
    } else {
      //redirect to blog index
      console.log(newlyCreatedBlog);
      res.redirect('/');
    }
  })

})

module.exports = router;
