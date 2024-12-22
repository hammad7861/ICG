const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContentSchema = new Schema(
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
    type: {
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
    content: {
      type: String,
      required: true,
    },
    banner: { type: String, trim: true, required: true },
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

const Content = mongoose.model("Content", ContentSchema);

module.exports = Content;
