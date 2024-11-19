const { ASSET_URL_TYPE } = require("../../constants");
const { Event } = require("../../models");
const {
  common: {
    getAllControllerQueries: { getAll },
  },
} = require("../../services");
const {
  successResponse,
  getAssetUrl,
  calculateTotalPages,
} = require("../../utils");

const getEventsController = {
  async getEvents(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;

      let { records: events, count } = await getAll(Event, limit, skip);

      const totalPages = calculateTotalPages(count, limit);

      events = events.map((event) => ({
        ...event.toObject(),
        banner: getAssetUrl(req, ASSET_URL_TYPE.eventBannerImage, event.banner),
      }));

      successResponse(res, 200, "Events fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        events,
      });
    } catch (error) {
      console.error("ERROR IN GETTING EVENTS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getEventsController;
