var mongoose = require('mongoose');
//bring in the teammate model, project model & task model
var teamMate = require('./models/team-mate')
var project = require('./models/project')
var task = require('./models/tasks')

//Instantiate Teammate objects from teamMate Schema
//Declaring Teammates first, will push projects into after Tasks & Projects are declared.
var Adam = new teamMate({
  name: 'Adam',
  projects: []
});
var Stuart = new teamMate({
  name: 'Stuart',
  projects: []
})
var Lan = new teamMate({
  name: 'Lan',
  projects: []
});
var Tyler = new teamMate({
  name: 'Tyler',
  projects: []
});
/////////////////////////

//Angular Project ///////////////////
//Instantiate each Angular task from task Schema//
var upgradeAngularTask = new task({
  name: "Upgrade Angular",
  assignedName: "Lan",
  assigned: [Lan],
  hours: 15
})
var fixBrokenThings = new task({
  name: "Fix Broken Things",
  assignedName: "Stuart",
  assigned: [Stuart],
  hours: 10
})
var test = new task({
  name: "Test",
  assignedName: "Lan",
  assigned: [Lan],
  hours: 10
})
var allAngularTasks = [upgradeAngularTask,fixBrokenThings,test];
//Instantiate Angular Project from project Schmea //
var upgradeAngular = new project({
  name: "Upgrade Angular",
  assignedName: ['Stuart', 'Lan'],
  members: [Stuart,Lan],
  hours: 35,
  tasks: allAngularTasks

})
///////////////////////////////


//Websocket & all tasks/////////////////
//Instantiate each Websocket task from task Schema//
var addToSocketIo = new task({
  name: "Add to Socket Io",
  assignedName: "Stuart",
  assigned: [Stuart],
  hours: 2
})
var enableBroadcasting = new task({
  name: "Enable Broadcasting",
  assignedName: "Stuart",
  assigned: [Stuart],
  hours: 5
})
var adjustInterface = new task({
  name: "Adjust Interface",
  assignedName: "Stuart",
  assigned: [Stuart],
  hours: 3
})
var allWebsocketTasks = [addToSocketIo,enableBroadcasting,adjustInterface];
//Instantiate Websocket Project from project Schema //
var upgradeWebsocket = new project({
  name: "Upgrade Websocket",
  assignedName: "Stuart",
  members: [Stuart],
  hours: 10,
  tasks: allWebsocketTasks
})
/////////////////////////////////////////


//Ecommerce & tasks ////////////////////////////////////
//Instantiate each eCommerce task from task Schema//
var projectPages = new task({
  name: "Project Pages",
  assignedName: "Adam",
  assigned: [Adam],
  hours: 5
})
var shoppingCart = new task({
  name: "Shopping Cart",
  assignedName: "Tyler",
  assigned: [Tyler],
  hours: 10
})
var myAccount = new task({
  name: "My Account",
  assignedName: "Adam",
  assigned: [Adam],
  hours: 5
})
var alleCommerceWebsiteTasks = [projectPages,shoppingCart,myAccount];
//Instantiate eCommerce Project from project Schema //
var eCommerceWebsite = new project({
  name: "eCommerce Website",
  assignedName: ["Adam",'Tyler'],
  members: [Adam, Tyler],
  hours: 20,
  tasks: alleCommerceWebsiteTasks
})
//////////////////////////////////


//Push projects into the team-mates who are working on them//
Adam.projects.push(eCommerceWebsite)
Tyler.projects.push(eCommerceWebsite,upgradeAngular)
Lan.projects.push(upgradeAngular)
Stuart.projects.push(upgradeWebsocket)

//Declare arrays which will contain the tasks,project & teammates that the database will be seeded from//

var dataTasks = [alleCommerceWebsiteTasks,allAngularTasks,allWebsocketTasks];
var dataTeamMate = [Adam,Stuart,Lan,Tyler];
var dataProject = [upgradeAngular,upgradeWebsocket,eCommerceWebsite];

//Seed DB//
function seedDB(){
  teamMate.remove({}, function(err){
    if(err){
      console.log(err);
    } else{
      for (val of dataTeamMate){
        teamMate.create(val)
      }
    }
  })
  project.remove({}, function(err){
    if(err){
      console.log(err);
    } else {
      for (val of dataProject){
        project.create(val)
      }
    }
  })
  task.remove({}, function(err){
    if(err){
      console.log(err);
    }
    else {
      for(total of dataTasks){
        for (eachTask of total){
          task.create(eachTask);
        }
      }
    }
  })
}
seedDB();
