var path = require("path");
var db = require("../models");

module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Article.find({})
        .then(function(posts){
            res.render("home", {posts: posts}); 
        })
        
    });

}