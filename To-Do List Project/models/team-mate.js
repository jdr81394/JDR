//Mongo comes preloaded with schemas you can build your objects with
var mongoose = require('mongoose');

//Schema to design the structure
var teamMateSchema = new mongoose.Schema({
    name: String,
    //Array that will contain the project objects.
    projects: [
      {
           type: mongoose.Schema.Types.ObjectId,
           ref: "project"
        }
    ],
    //Unique ID that will be used to render it's own personal page.
    id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "teamMate"
      }
});
//Export this schema to app.js
module.exports = mongoose.model('teamMate', teamMateSchema);
