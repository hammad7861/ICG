const { Event } = require("../../../models");

const deleteEventControllerQueries = {
  async deleteEvent(eventId) {
    return Event.findByIdAndUpdate(eventId, {
      archived: true,
    });
  },
};

module.exports = deleteEventControllerQueries;
