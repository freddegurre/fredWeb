var path = require("path");
var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Article.find({}).populate("note")
        .then(function(posts){
            console.log(posts); 
            //res.json(posts);
           res.render("home", {posts: posts}); 
        }); 
        
    });

}