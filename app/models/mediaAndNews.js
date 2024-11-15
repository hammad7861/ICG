const mongoose = require("mongoose");
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
      enum: ["news", "media", "press_release"],
      trim: true,
    },
    archived: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
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
      required: true,
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
