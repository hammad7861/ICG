const { ASSET_URL_TYPE } = require("../../constants");
const { MediaAndNews } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
    deleteControllerQueries: { deleteRecord },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const deleteMediaAndNewsController = {
  async deleteMediaAndNews(req, res, next) {
    try {
      const {
        sanitizedParams: { mediaAndNewsId },
      } = req;

      const mediaAndNews = await getOne(MediaAndNews, mediaAndNewsId);

      if (!mediaAndNews) throw CustomErrorHandler.notFound("MediaAndNews");

      const bannerImagePath = getAssetPath(
        ASSET_URL_TYPE.mediaAndNewsBannerImage,
        mediaAndNews.banner
      );

      await deleteRecord(MediaAndNews, mediaAndNewsId);

      deleteFiles([{ path: bannerImagePath }]);

      successResponse(res, 200, "Media and News deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE MEDIA AND NEWS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteMediaAndNewsController;
