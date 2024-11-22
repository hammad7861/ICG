const { ASSET_URL_TYPE } = require("../../constants");
const { Brochure } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
    deleteControllerQueries: { deleteRecord },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const deleteBrochureController = {
  async deleteBrochure(req, res, next) {
    try {
      const {
        sanitizedParams: { brochureId },
      } = req;

      const brochure = await getOne(Brochure, brochureId);

      if (!brochure) throw CustomErrorHandler.notFound("Brochure");

      const attachmentImagePath = getAssetPath(
        ASSET_URL_TYPE.brochureAttachmentImage,
        brochure.attachment
      );

      await deleteRecord(Brochure, brochureId);

      deleteFiles([{ path: attachmentImagePath }]);

      successResponse(res, 200, "Brochure deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE BROCHURE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteBrochureController;
