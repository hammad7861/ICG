const { Brochure } = require("../../models");
const {
  common: {
    createControllerQueries: { create },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const createBrochureController = {
  async createBrochure(req, res, next) {
    try {
      const {
        sanitizedBody: { title, author, publishDate, category, published },
        file: { filename },
      } = req;

      const brochureData = {
        attachment: filename,
        title,
        author,
        publish_date: publishDate,
        category,
        published,
      };

      await create(Brochure, brochureData);

      successResponse(res, 200, "Brochure created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE BROCHURE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createBrochureController;
