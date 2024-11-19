const { ASSET_URL_TYPE } = require("../../constants");
const { Event } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateEventController = {
  async updateEvent(req, res, next) {
    try {
      const {
        sanitizedBody: {
          name,
          description,
          startDate,
          endDate,
          status,
          comments,
        },
        file: { filename } = {},
        sanitizedParams: { eventId },
      } = req;

      const event = await getOne(Event, eventId);

      if (!event) throw CustomErrorHandler.notFound("Event");

      const updatePayload = {
        name,
        description,
        startDate,
        endDate,
        status,
        comments,
      };

      if (filename) {
        updatePayload.banner = filename;

        const bannerImagePath = getAssetPath(
          ASSET_URL_TYPE.eventBannerImage,
          event.banner
        );

        deleteFiles([{ path: bannerImagePath }]);
      }

      await update(Event, eventId, updatePayload);

      successResponse(res, 200, "Event updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE EVENT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateEventController;
