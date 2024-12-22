const mongoose = require("mongoose");
const { Schema } = mongoose;

const BrochureSchema = new Schema(
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
    category: {
      type: String,
      required: true,
      trim: true,
    },
    attachment: {
      type: String,
      required: true,
      trim: true,
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

const Brochure = mongoose.model("Brochure", BrochureSchema);

module.exports = Brochure;
