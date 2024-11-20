const { ASSET_URL_TYPE } = require("../../constants");
const { MediaAndNews } = require("../../models");
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

const getMediaAndNewssController = {
  async getMediaAndNewss(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;

      let { records: mediaAndNews, count } = await getAll(
        MediaAndNews,
        limit,
        skip
      );

      const totalPages = calculateTotalPages(count, limit);

      mediaAndNews = mediaAndNews.map((mediaAndNews) => ({
        ...mediaAndNews.toObject(),
        banner: getAssetUrl(
          req,
          ASSET_URL_TYPE.mediaAndNewsBannerImage,
          mediaAndNews.banner
        ),
      }));

      successResponse(res, 200, "Media and News fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        mediaAndNews,
      });
    } catch (error) {
      console.error("ERROR IN GETTING MEDIA AND NEWS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getMediaAndNewssController;
