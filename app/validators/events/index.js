const createEventValidationSchema = require("./createEventValidationSchema");
const deleteEventValidationSchema = require("./deleteEventValidationSchema");
const getEventsValidationSchema = require("./getEventsValidationSchema");
const getEventValidationSchema = require("./getEventValidationSchema");
const updateEventValidationSchema = require("./updateEventValidationSchema");

module.exports = {
  createEventValidationSchema,
  getEventsValidationSchema,
  getEventValidationSchema,
  updateEventValidationSchema,
  deleteEventValidationSchema,
};
