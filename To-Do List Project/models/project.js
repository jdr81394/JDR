//Mongo comes preloaded with schemas you can build your objects with
var mongoose = require('mongoose');

//Schema to design the structure
var projectSchema = new mongoose.Schema({
  // Name of Project
    name: String,
    // Names of teammates that will be rendered in the browser
    assignedName: [String],
    // Array that contain the team-mate objects
    members: [
      {
           type: mongoose.Schema.Types.ObjectId,
           ref: "teamMate"
        }
    ],
    //Total hours it will take to complete.
    hours: Number,
    //Array that will contain the task objects.
    tasks: [{
      name: String,
      assignedName: String,
      assigned: [{
                 type: mongoose.Schema.Types.ObjectId,
                 ref: "teamMate"
              }],
      hours: Number,
      id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "task"
        }
    }],
    //Unique ID that will be used to render it's own personal page.
    id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "project"
      }
});
//Export this schema to app.js
module.exports = mongoose.model('project', projectSchema);
