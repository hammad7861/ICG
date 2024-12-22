const { MediaAndNews } = require("../../models");
const {
  common: {
    createControllerQueries: { create },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const createMediaAndNewsController = {
  async createMediaAndNews(req, res, next) {
    try {
      const {
        title,
        description,
        publishDate,
        type,
        name,
        email,
        contact,
        content,
      } = req.sanitizedBody;
      const { filename } = req.file;

      const mediaAndNewsData = {
        banner: filename,
        title,
        description,
        publish_date: publishDate,
        type,
        name,
        email,
        contact,
        content,
      };

      await create(MediaAndNews, mediaAndNewsData);

      successResponse(res, 200, "Media and News created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE MEDIA AND NEWS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createMediaAndNewsController;
