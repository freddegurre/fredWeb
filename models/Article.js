var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: "will not make copies"
  },
  article: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }], 
  created: {
    type: Date,
    default: Date.now
  },
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
