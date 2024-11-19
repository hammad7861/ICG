const { ASSET_URL_TYPE } = require("../../constants");
const {
  events: {
    getEventControllerQueries: { getEvent },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetUrl } = require("../../utils");

const getEventController = {
  async getEvent(req, res, next) {
    try {
      const { eventId } = req.sanitizedParams;

      let event = await getEvent(eventId);

      if (!event) throw CustomErrorHandler.notFound("Event");

      event.banner = getAssetUrl(
        req,
        ASSET_URL_TYPE.eventBannerImage,
        event.banner
      );

      successResponse(res, 200, "Event fetched", { event });
    } catch (error) {
      console.error("ERROR IN GETTING EVENT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getEventController;
