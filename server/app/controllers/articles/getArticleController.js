const { ASSET_URL_TYPE } = require("../../constants");
const { Article } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetUrl } = require("../../utils");

const getArticleController = {
  async getArticle(req, res, next) {
    try {
      const { articleId } = req.sanitizedParams;

      let article = await getOne(Article, articleId);

      if (!article) throw CustomErrorHandler.notFound("Article");

      article.banner = article.banner.map((banner) =>
        getAssetUrl(req, ASSET_URL_TYPE.articleBannerImage, banner)
      );

      article.attachment = getAssetUrl(
        req,
        ASSET_URL_TYPE.artcileAttachmentDocument,
        article.attachment
      );

      successResponse(res, 200, "Article fetched", { article });
    } catch (error) {
      console.error("ERROR IN GETTING ARTICLE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getArticleController;
