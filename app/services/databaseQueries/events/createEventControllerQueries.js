const { Event } = require("../../../models");

const createEventControllerQueries = {
  async createEvent(eventData) {
    return Event.create(eventData);
  },
};

module.exports = createEventControllerQueries;
