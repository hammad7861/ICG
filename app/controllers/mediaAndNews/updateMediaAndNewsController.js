const { ASSET_URL_TYPE, MEDIA_AND_NEWS_TYPES } = require("../../constants");
const { MediaAndNews } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateMediaAndNewsController = {
  async updateMediaAndNews(req, res, next) {
    try {
      const {
        sanitizedBody: {
          title,
          description,
          publishDate,
          type,
          name,
          email,
          contact,
          content,
        },
        file: { filename } = {},
        sanitizedParams: { mediaAndNewsId },
      } = req;

      const mediaAndNews = await getOne(MediaAndNews, mediaAndNewsId);

      if (!mediaAndNews) throw CustomErrorHandler.notFound("Media and News");

      const updatePayload = {
        title,
        description,
        publishDate,
        type,
        ...(type === MEDIA_AND_NEWS_TYPES.PRESS_RELEASE && {
          name,
          email,
          contact,
        }),
        ...(type === MEDIA_AND_NEWS_TYPES.NEWS_ANNOUNCEMENT && { content }),
      };

      const unsetPayload =
        type === MEDIA_AND_NEWS_TYPES.PRESS_RELEASE
          ? { content: "" }
          : { name: "", email: "", contact: "" };

      if (filename) {
        updatePayload.banner = filename;

        const bannerImagePath = getAssetPath(
          ASSET_URL_TYPE.mediaAndNewsBannerImage,
          mediaAndNews.banner
        );

        deleteFiles([{ path: bannerImagePath }]);
      }

      await update(MediaAndNews, mediaAndNewsId, {
        $set: updatePayload,
        $unset: unsetPayload,
      });

      successResponse(res, 200, "Media and News updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE MEDIA AND NEWS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateMediaAndNewsController;
