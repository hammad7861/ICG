const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publish_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    article_category: {
      type: String,
      required: true,
      trim: true,
    },
    content_category: {
      type: String,
      required: true,
      trim: true,
    },
    tags: [{ type: String, trim: true, required: true }],
    summary: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    attachment: {
      type: String,
      trim: true,
    },
    banner: [{ type: String, trim: true, required: true }],
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
