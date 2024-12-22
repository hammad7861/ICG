const { ASSET_URL_TYPE } = require("../../constants");
const { Brochure } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetUrl } = require("../../utils");

const getBrochureController = {
  async getBrochure(req, res, next) {
    try {
      const { brochureId } = req.sanitizedParams;

      let brochure = await getOne(Brochure, brochureId);

      if (!brochure) throw CustomErrorHandler.notFound("Brochure");

      brochure.attachment = getAssetUrl(
        req,
        ASSET_URL_TYPE.brochureAttachmentImage,
        brochure.attachment
      );

      successResponse(res, 200, "Brochure fetched", { brochure });
    } catch (error) {
      console.error("ERROR IN GETTING BROCHURE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getBrochureController;
