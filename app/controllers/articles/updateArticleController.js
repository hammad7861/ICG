const { ASSET_URL_TYPE, MEDIA_AND_NEWS_TYPES } = require("../../constants");
const { Article } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateArticleController = {
  async updateArticle(req, res, next) {
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
        sanitizedParams: { articleId },
      } = req;

      const article = await getOne(Article, articleId);

      if (!article) throw CustomErrorHandler.notFound("Article");

      const updatePayload = {
        title,
        author,
        publish_date: publishDate,
        article_category: articleCategory,
        content_category: contentCategory,
        tags,
        summary,
        description,
      };

      const filePathsToDelete = [];

      if (files) {
        if (files.bannerImage && files.bannerImage[0]) {
          const { filename: bannerImagefilename } = files.bannerImage[0];
          updatePayload.banner = [bannerImagefilename];

          const bannerImagePath = getAssetPath(
            ASSET_URL_TYPE.articleBannerImage,
            article.banner
          );
          filePathsToDelete.push({ path: bannerImagePath });
        }

        if (files.articleAttachmet && files.articleAttachmet[0]) {
          const { filename: attachmentFilename } = files.articleAttachmet[0];
          updatePayload.attachment = attachmentFilename;

          const AttachemntPath = getAssetPath(
            ASSET_URL_TYPE.artcileAttachmentDocument,
            article.attachment
          );
          filePathsToDelete.push({ path: AttachemntPath });
        }
      }

      if (filePathsToDelete.length > 0) {
        deleteFiles(filePathsToDelete);
      }

      await update(Article, articleId, updatePayload);

      successResponse(res, 200, "Article updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE ARTCILE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateArticleController;
