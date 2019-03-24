//Mongo comes preloaded with schemas you can build your objects with
var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  //Name that will be used to identify the task
    name: String,
    // Names of teammates that will be rendered in the browser
    assignedName: String,
    // Array that contains the team-mate objects
    assigned: [
      {
               name: String,
               type: mongoose.Schema.Types.ObjectId,
               ref: "teamMate"
            }
    ],
    //Total hours it will take to complete.
    hours: Number,
    //Unique ID that will be used to find specific task and render it.
    id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "task"
      }
});
//Export this schema to app.js
module.exports = mongoose.model('task', taskSchema);
