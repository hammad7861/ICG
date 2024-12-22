const { ASSET_URL_TYPE } = require("../../constants");
const { Content } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
    deleteControllerQueries: { deleteRecord },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const deleteContentController = {
  async deleteContent(req, res, next) {
    try {
      const {
        sanitizedParams: { contentId },
      } = req;

      const content = await getOne(Content, contentId);

      if (!content) throw CustomErrorHandler.notFound("Content");

      const bannerImagePath = getAssetPath(
        ASSET_URL_TYPE.contentBannerImage,
        content.banner
      );

      await deleteRecord(Content, contentId);

      deleteFiles([{ path: bannerImagePath }]);

      successResponse(res, 200, "Content deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE CONTENT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteContentController;
