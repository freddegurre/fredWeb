
var path = require("path");
var db = require("../models");

module.exports = function(app){

    app.post("/articles/:id", function(req, res){
        console.log(req.body); 
        db.Note.create(req.body).then(function(note){
            return db.Article.findOneAndUpdate({_id: req.params.id},{$push: {note: note._id}}, {new: true}); 
        }).then(function(article){
            //return res.redirect("/");
            res.json(article); 
        }).catch(function(err){
            res.json(err); 
        })
    });

    app.get("/notes/:id", function(req, res){
        console.log(req.params.id);
        db.Note.findByIdAndRemove({_id:req.params.id},  function(err, res){
           //return res.redirect("/");
        }).then(function(){
            //res.render("home")
        }).catch(function(err){
            res.json(err); 
        })
    })


}
