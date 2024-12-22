const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema(
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
    blog_category: {
      type: String,
      required: true,
      trim: true,
    },
    featured_image: {
      type: String,
      trim: true,
    },
    tags: [{ type: String, trim: true }],
    contents: {
      type: String,
      required: true,
    },
    sharing: {
      type: Boolean,
      default: false,
    },
    comments: {
      type: Boolean,
      default: false,
    },
    banner: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
