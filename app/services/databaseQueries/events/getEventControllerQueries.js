const { Event } = require("../../../models");

const getEventControllerQueries = {
  async getEvent(eventId) {
    return Event.findOne(
      { _id: eventId, archived: false },
      "-createdAt -updatedAt -__v"
    );
  },
};

module.exports = getEventControllerQueries;
