const { Article } = require("../../models");
const {
  common: {
    createControllerQueries: { create },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const createArticleController = {
  async createArticle(req, res, next) {
    try {
      const {
        sanitizedBody: {
          title,
          author,
          publishDate,
          articleCategory,
          contentCategory,
          tags,
          summary,
          description,
        },
        files = {},
      } = req;

      const { bannerImage = [], articleAttachment = [] } = files;

      const bannerFiles = bannerImage.map((file) => file.filename);

      const attachmentFilename =
        articleAttachment.length > 0 ? articleAttachment[0].filename : null;

      const articleData = {
        banner: bannerFiles,
        title,
        author,
        publish_date: publishDate,
        article_category: articleCategory,
        content_category: contentCategory,
        tags,
        summary,
        description,
        attachment: attachmentFilename,
      };

      await create(Article, articleData);

      successResponse(res, 200, "Article created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE ARTICLE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createArticleController;
