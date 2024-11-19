const { Event } = require("../../../models");

const updateEventControllerQueries = {
  async updateEvent(eventId, data) {
    return Event.findByIdAndUpdate(eventId, data, {
      new: true,
      runValidators: true,
    });
  },
};

module.exports = updateEventControllerQueries;
