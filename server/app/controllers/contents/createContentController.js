const { Content } = require("../../models");
const {
  common: {
    createControllerQueries: { create },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const createContentController = {
  async createContent(req, res, next) {
    try {
      const {
        sanitizedBody: {
          title,
          author,
          publishDate,
          type,
          tags,
          summary,
          content,
          published,
        },
        file: { filename },
      } = req;

      const contentData = {
        banner: filename,
        title,
        author,
        publish_date: publishDate,
        type,
        tags,
        summary,
        content,
        published,
      };

      await create(Content, contentData);

      successResponse(res, 200, "Content created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE CONTENT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createContentController;
