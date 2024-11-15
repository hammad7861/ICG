const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    departments: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    employment_type: {
      type: String,
      required: true,
      enum: ["full-time", "part-time", "contract", "internship"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    scheduled: {
      type: Boolean,
      default: false,
    },
    scheduled_date: {
      type: Date,
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

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
