const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value >= this.start_date;
        },
        message: "End date must be after or equal to start date",
      },
    },
    status: {
      type: String,
      required: true,
    },
    comments: {
      type: String,
      trim: true,
    },
    banner: {
      type: String,
      required: true,
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

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
