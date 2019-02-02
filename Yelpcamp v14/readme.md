#YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds
* 
Each Campground has:
* Name
* Image


#Layout and Basic Styling
Create our header and footer partials
Add in bootstrap

#Creating new Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form


#Style the campgrounds page
* Add a better header/title
* Make campgorudns display ina  grid

#Style the navbar and form
* Add a navbar to all templates
* Style the new campground form


#Mongoose
* What is Mongoose?
    *   an ODM (Object Data Mapper), its a way for us to write javascript
    * inside our Javascript files that acts with our database.
    * its essentially a javascript layer ontop of our MongoDb.
* Why are we using it?
* Interact with a Mongo Database using Mongoose


#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!


#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template


Restful Routes

name      url           verb    desc.
====================================================
INDEX    /dogs          GET    Display a list of all dogs
NEW      /dogs/new      GET    Display form to make a new dogs
CREATE   /dogs          POST   Add new dog to DB
SHOW     /dogs/:id      GET    Shows info about one dog



why does this exist? 
1. its good to have structure
2. this pattern alot of applications follow and enable us to use APIs

#Refactor Mongoose Code
*Create a models directory
* Use module.exports
* Require everything correctly!


#Add seeds files
* Empties your database to start, then goes and adds in the data.


#Add the Comment model!
* Make our errors go away!
* Display comments on campground show page


#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form


#Auth Pt 1. - Add User Model
* Install all packages needed for authentication
* Define User Model

#Auth Pt 2. - Register
* Configure Passport
* Add register routes
* Add register templates
* 

#Auth Pt. 3 - Login
* Add login routes
* Add login templates 


#Auth Pt. 4 - logout/navbar
* Add logout route
* Prevent user from adding a comment if not signed in 
* Add links to navbar
* Show/hide auth links correctly

#Auth Pt. 5 - Show/Hide links
*Show/hide auth links in the navbar correctly

#Refactor the routes
*use the express router to reorganize all routes

#Users + Comments
* Associate the users and comments
* Save authors name to comment automatically
* 

#Users + Campgrounds
* Prevent an unauthenticated user from creating a campground
* save username + id to newly created campground
* 

#Editing Campgrounds
* add method-override
* add edit route for campgrounds
* add link to edit page
* add update route
* fix $set problem

#deleting campgrounds
* Add destroy route
* add delete button
* 

#Authorization
* user can only edit his/her campgrounds
* user can only delete his/her campgrounds
* hide/show edit and delete campgrounds
* 

#Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header
* 

#Git

##Introduction
* What is GitWhat is Github
* Why should you care?
* Novel Writing Analogy
* Installing Git(not really)
* 

#Git Basics
*Git init
*Git add
*Git commit