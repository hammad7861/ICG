const { ASSET_URL_TYPE } = require("../../constants");
const { Content } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateContentController = {
  async updateContent(req, res, next) {
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
        file: { filename } = {},
        sanitizedParams: { contentId },
      } = req;

      const contentFromDB = await getOne(Content, contentId);

      if (!contentFromDB) throw CustomErrorHandler.notFound("Content");

      const updatePayload = {
        title,
        author,
        publishDate,
        type,
        tags,
        summary,
        content,
        published,
      };

      if (filename) {
        updatePayload.profileImage = filename;

        const contentBannerImagePath = getAssetPath(
          ASSET_URL_TYPE.contentBannerImage,
          contentFromDB.banner
        );

        deleteFiles([{ path: contentBannerImagePath }]);
      }

      await update(Content, contentId, updatePayload);

      successResponse(res, 200, "Content updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE CONTENT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateContentController;
