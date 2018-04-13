var path = require("path");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("../models");


module.exports = function(app) {

    app.get("/scrape", function(req, res) {
   
        axios.get("https://techcrunch.com/").then(function(response) {
        
        var $ = cheerio.load(response.data);
    
        $(".post-block").each(function(i, element) {
           
            var result = {};
    
            result.title = $(this).find("header").find("h2").find("a").text().replace("\n\t\t\t\t", "").replace("\t\t\t", ""); 
            result.article = $(this).find(".post-block__content").text().replace("\n\t\t", "").replace("\t", ""); 
            result.link = $(this).find("header").find("h2").find("a").attr("href");
            result.img = $(this).find("footer").find("figure").find("img").attr("src");
            
            console.log(result);
           
            db.Article.create(result)
            .then(function(dbArticle) {
             
                res.end(); 
            })
            .catch(function(err) {
                return res.json(err);
            });
        });
    
        res.send("Scrape Complete");
        });
    });
}