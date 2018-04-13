# fredWeb
A Full stack web application that lets users view and leave comments on the latest TechCrunch news. All articles are scraped from TechCrunch.com, and stored in to DB. The application is built on MVC standars and Rest API.  HTML/CSS Javascript/jQuery, Handlebars, Node.js, Express, MongoDB Mongoose. 
[fredWeb!](https://fredweb.herokuapp.com/)

The application is hosted on Heroku. 

### DB
The database is a simple MongoDB with Two collections. **Articles** **Notes** Notes are related to the coresponding article and can be accsesed via the article object. 

{
            "note": [
                {
                    "_id": "5ad0014beb31306b3efbc694",
                    "note": "Very interesting article, read it now!",
                    "__v": 0
                }
            ],
            "created": "2018-04-13T01:00:36.160Z",
            "_id": "5ad00134eb31306b3efbc680",
            "title": "FCC declines to punish Sinclair for its ‘must-run’ segments and scripts",
            "article": "It was hard to avoid seeing the video posted last week showing local news stations reciting a \"must-run\" script about fake news from their parent company, Sinclair broadcasting, in eerie synchrony. It",
            "link": "https://techcrunch.com/2018/04/12/fcc-declines-to-punish-sinclair-for-its-must-run-segments-and-scripts/",
            "img": "https://techcrunch.com/wp-content/uploads/2017/12/gettyimages-892335360.jpeg?w=1024?w=300&h=160&crop=1",
        "__v": 0
},

### dependencies
                "dependencies": {
                    "axios": "^0.18.0",
                    "body-parser": "^1.18.2",
                    "cheerio": "^1.0.0-rc.2",
                    "express": "^4.16.3",
                    "express-handlebars": "^3.0.0",
                    "mongoose": "^5.0.14",
                    "request": "^2.85.0"
                }

######  Fredrik Gustafson

:poop: