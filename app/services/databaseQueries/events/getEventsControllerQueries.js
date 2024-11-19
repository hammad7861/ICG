const { Event } = require("../../../models");

const getEventsControllerQueries = {
  async getEvents(limit, skip) {
    const query = { archived: false };
    const events = await Event.find(query, "-createdAt -updatedAt -__v")
      .skip(skip)
      .limit(limit)
      .exec();
    const count = await Event.countDocuments(query);

    return { events, count };
  },
};

module.exports = getEventsControllerQueries;
