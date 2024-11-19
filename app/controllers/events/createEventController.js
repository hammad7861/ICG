const { Event } = require("../../models");
const {
  common: {
    createControllerQueries: { create },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const createEventController = {
  async createEvent(req, res, next) {
    try {
      const { name, description, startDate, endDate, status, comments } =
        req.sanitizedBody;
      const { filename } = req.file;

      const eventData = {
        banner: filename,
        name,
        description,
        start_date: startDate,
        end_date: endDate,
        status,
        comments,
      };

      await create(Event, eventData);

      successResponse(res, 200, "Event created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE EVENT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createEventController;
