const { ASSET_URL_TYPE } = require("../../constants");
const { Event } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
    deleteControllerQueries: { deleteRecord },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const deleteEventController = {
  async deleteEvent(req, res, next) {
    try {
      const {
        sanitizedParams: { eventId },
      } = req;

      const event = await getOne(Event, eventId);

      if (!event) throw CustomErrorHandler.notFound("Event");

      const bannerImagePath = getAssetPath(
        ASSET_URL_TYPE.eventBannerImage,
        event.banner
      );

      await deleteRecord(Event, eventId);

      deleteFiles([{ path: bannerImagePath }]);

      successResponse(res, 200, "Event deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE EVENT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteEventController;
