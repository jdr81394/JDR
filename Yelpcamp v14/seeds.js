var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');



var data = [
    {
    name: "Cloud's Rest", 
    image: "https://cdn.pixabay.com/photo/2016/11/15/23/43/motorhome-1827832_960_720.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in dui vestibulum, feugiat eros sit amet, tincidunt augue. Aliquam eget dui tristique magna euismod aliquam. In id massa consequat nunc molestie maximus et ac elit. Fusce et elit vitae ipsum commodo tristique a vitae nunc."
    },
        {
    name: "Nature's Pitstop", 
    image: "https://cdn.pixabay.com/photo/2017/10/07/01/01/bach-leek-2825197_960_720.jpg",
    description: "blah blah blah"  
        },
    {
    name: "World's End Bastion", 
    image: "https://cdn.pixabay.com/photo/2018/05/16/15/49/camper-3406137_960_720.jpg",
    description: "blah blah blah"
    }
    ]

function seedDB(){
    //Remove all campgrounds
Campground.remove({}, function(err){
    if(err){
        console.log(err);
        }
    else{
    console.log('removed campgrounds');
        //add a few campgrounds
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log('added a campground');
                //add a few comments
                Comment.create(
                    {
                        text: "This place is great, but I wish there was internet!",
                        author: "Homer"
                    }, function(err, comment){ 
                        if(err){
                            console.log(err)
                        } else {
                        campground.comments.push(comment);
                        campground.save();
                        console.log('Created new comment');
                        }

                    })
            }
        });
        });

        }
    });

}
module.exports = seedDB;