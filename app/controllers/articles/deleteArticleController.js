const { ASSET_URL_TYPE } = require("../../constants");
const { Article } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
    deleteControllerQueries: { deleteRecord },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const deleteArticleController = {
  async deleteArticle(req, res, next) {
    try {
      const {
        sanitizedParams: { articleId },
      } = req;

      const article = await getOne(Article, articleId);

      if (!article) throw CustomErrorHandler.notFound("Article");

      const bannerImagePath = getAssetPath(
        ASSET_URL_TYPE.articleBannerImage,
        article.banner
      );

      const attachmentPath = getAssetPath(
        ASSET_URL_TYPE.artcileAttachmentDocument,
        article.attachment
      );

      await deleteRecord(Article, articleId);

      deleteFiles([{ path: bannerImagePath }, { path: attachmentPath }]);

      successResponse(res, 200, "Article deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE ARTICLE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteArticleController;
