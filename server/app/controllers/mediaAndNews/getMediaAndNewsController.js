const { ASSET_URL_TYPE } = require("../../constants");
const { MediaAndNews } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetUrl } = require("../../utils");

const getMediaAndNewsController = {
  async getMediaAndNews(req, res, next) {
    try {
      const { mediaAndNewsId } = req.sanitizedParams;

      let mediaAndNews = await getOne(MediaAndNews, mediaAndNewsId);

      if (!mediaAndNews) throw CustomErrorHandler.notFound("Media and News");

      mediaAndNews.banner = getAssetUrl(
        req,
        ASSET_URL_TYPE.mediaAndNewsBannerImage,
        mediaAndNews.banner
      );

      successResponse(res, 200, "Media and News fetched", { mediaAndNews });
    } catch (error) {
      console.error("ERROR IN GETTING MEDIA AND NEWS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getMediaAndNewsController;
