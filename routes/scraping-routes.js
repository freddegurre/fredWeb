var path = require("path");
var axios = require("axios");
var cheerio = require("cheerio");

var db = require("../models");

//var db = require("../models");
module.exports = function(app) {
    // A GET route for scraping the echoJS website
    app.get("/scrape", function(req, res) {
        // First, we grab the body of the html with request
        axios.get("https://techcrunch.com/").then(function(response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);
    
        // Now, we grab every h2 within an article tag, and do the following:
        $(".post-block").each(function(i, element) {
            // Save an empty result object
            var result = {};
    
            // Add the text and href of every link, and save them as properties of the result object
            result.title = $(this).find("header").find("h2").find("a").text().replace("\n\t\t\t\t", "").replace("\t\t\t", ""); 
            result.article = $(this).find(".post-block__content").text().replace("\n\t\t", "").replace("\t", ""); 
            result.link = $(this).find("header").find("h2").find("a").attr("href");
            result.img = $(this).find("footer").find("figure").find("img").attr("src");
            
            console.log(result);
            
            //Create a new Article using the `result` object built from scraping
            db.Article.create(result)
            .then(function(dbArticle) {
                // View the added result in the console
                res.end(); 
            })
            .catch(function(err) {
                // If an error occurred, send it to the client
                return res.json(err);
            });
        });
    
    
        // If we were able to successfully scrape and save an Article, send a message to the client
        res.send("Scrape Complete");
        });
    });
}