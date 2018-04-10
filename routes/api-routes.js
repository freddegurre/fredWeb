var path = require("path");
var db = require("../models");

module.exports = function(app){

    app.post("/articles/:id", function(req, res){
        console.log(req.body); 
        db.Note.create(req.body).then(function(note){
            return db.Article.findOneAndUpdate({_id: req.params.id}, {note: note._id}, {new: true}); 
        }).then(function(article){
            res.json(article); 
        }).catch(function(err){
            res.json(err); 
        })
    })


}
