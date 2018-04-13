var path = require("path");
var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Article.find().sort({_id: 1}).populate("note")
        .then(function(posts){
            console.log(posts); 
           res.render("home", {posts: posts}); 
        }); 
        
    });

    app.get("/all", function(req, res){
        db.Article.find().sort({_id: 1}).populate("note")
        .then(function(posts){
            console.log(posts); 
            res.json(posts);
        }); 
    })

}


