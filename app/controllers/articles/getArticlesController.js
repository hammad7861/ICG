const { ASSET_URL_TYPE } = require("../../constants");
const { Article } = require("../../models");
const {
  common: {
    getAllControllerQueries: { getAll },
  },
} = require("../../services");
const {
  successResponse,
  getAssetUrl,
  calculateTotalPages,
} = require("../../utils");

const getArticlesController = {
  async getArticles(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;

      let { records: articles, count } = await getAll(Article, limit, skip);

      const totalPages = calculateTotalPages(count, limit);

      articles = articles.map((article) => ({
        ...article.toObject(),
        banner: article.banner.map((banner) =>
          getAssetUrl(req, ASSET_URL_TYPE.articleBannerImage, banner)
        ),
        attachment: getAssetUrl(
          req,
          ASSET_URL_TYPE.artcileAttachmentDocument,
          article.attachment
        ),
      }));

      successResponse(res, 200, "Articles fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        articles,
      });
    } catch (error) {
      console.error("ERROR IN GETTING ARTICLES CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getArticlesController;
