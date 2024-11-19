const createEventController = require("./createEventController");
const deleteEventController = require("./deleteEventController");
const getEventController = require("./getEventController");
const getEventsController = require("./getEventsController");
const updateEventController = require("./updateEventController");

module.exports = {
  createEventController,
  getEventsController,
  getEventController,
  updateEventController,
  deleteEventController,
};
