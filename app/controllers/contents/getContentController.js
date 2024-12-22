const { ASSET_URL_TYPE } = require("../../constants");
const { Content } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetUrl } = require("../../utils");

const getContentController = {
  async getContent(req, res, next) {
    try {
      const { contentId } = req.sanitizedParams;

      let content = await getOne(Content, contentId);

      if (!content) throw CustomErrorHandler.notFound("Content");

      content.banner = getAssetUrl(
        req,
        ASSET_URL_TYPE.contentBannerImage,
        content.banner
      );

      successResponse(res, 200, "Content fetched", { content });
    } catch (error) {
      console.error("ERROR IN GETTING CONTENT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getContentController;
