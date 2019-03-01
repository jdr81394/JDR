var express = require('express'),
router = express.Router({mergeParams:true}),
Blog = require('../models/blog.js');
//blog routes
//index
router.get('/', function(req,res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log(err);
    } else{
        res.render('blogs/blog', {blogs:blogs});
    }
  });
})


module.exports = router;
