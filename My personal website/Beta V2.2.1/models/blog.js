var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: String
});

module.exports = mongoose.model('Blog', blogSchema);
