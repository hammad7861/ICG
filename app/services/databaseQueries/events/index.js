const createEventControllerQueries = require("./createEventControllerQueries");
const deleteEventControllerQueries = require("./deleteEventControllerQueries");
const getEventControllerQueries = require("./getEventControllerQueries");
const getEventsControllerQueries = require("./getEventsControllerQueries");
const updateEventControllerQueries = require("./updateEventControllerQueries");

module.exports = {
  createEventControllerQueries,
  getEventsControllerQueries,
  getEventControllerQueries,
  updateEventControllerQueries,
  deleteEventControllerQueries,
};
