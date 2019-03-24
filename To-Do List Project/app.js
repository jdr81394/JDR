//Express is the server framework, app is initializing the server, mongoose will be used for our database
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//bring in the teammate model, task, project model
var teamMate = require('./models/team-mate')
var project = require('./models/project')
var task = require('./models/tasks')

//Bring in the database and seeding
var seedDb = require('./seedDb');


//connect the database
mongoose.connect("mongodb://localhost/to-do-list", { useNewUrlParser: true })

//Tell the express server where we will be serving the static CSS file from
app.use(express.static(__dirname + "/public"));
//enable usage of ejs files
app.set('view engine', 'ejs');


///INDEX - Pulls all teammate & project objects from database to be rendered so user may select one.
app.get('/', function(req,res){
  teamMate.find({}, function(err, allTeamMates){
  project.find({}, function(err, allProjects){
    if (err){
      console.log(err)
    } else {
      res.render('home.ejs' , {teammates:allTeamMates, projects:allProjects} )
    }
    })
  })
})

//SHOW TEAMMATE - Shows more info on specific teammate
app.get('/team-mate/:id', function(req,res){
  teamMate.findById(req.params.id, function(err, foundTeamMate){
    project.find({}, function(err, allProjects){
      if(err){
        console.log(err)
      } else{
        res.render('show.ejs', {teammate: foundTeamMate, project:allProjects})
      }
    })
  })
})

//SHOW PROJECT - Shows more info on specific project
app.get('/project/:id', function(req,res){
  project.findById(req.params.id, function(err, foundProject){
      if(err){
        console.log(err)
      } else{
        res.render('projectShow.ejs', {project: foundProject})
      }
  })
})

//Run server on 4000 port
app.listen(4000, function(){
  console.log('server is running')
})
