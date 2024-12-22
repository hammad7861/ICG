const mongoose = require("mongoose");
const { ALLOWED_MEDIA_AND_NEWS_TYPES } = require("../constants");
const { Schema } = mongoose;

const MediaAndNewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    publish_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    type: {
      type: String,
      required: true,
      enum: [...ALLOWED_MEDIA_AND_NEWS_TYPES],
      trim: true,
    },
    archived: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
    },
    contact: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
    },
    banner: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const MediaAndNews = mongoose.model("MediaAndNews", MediaAndNewsSchema);

module.exports = MediaAndNews;
