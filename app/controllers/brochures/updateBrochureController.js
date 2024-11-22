const { ASSET_URL_TYPE } = require("../../constants");
const { Brochure } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateBrochureController = {
  async updateBrochure(req, res, next) {
    try {
      const {
        sanitizedBody: { title, author, publishDate, category, published },
        file: { filename } = {},
        sanitizedParams: { brochureId },
      } = req;

      const brochure = await getOne(Brochure, brochureId);

      if (!brochure) throw CustomErrorHandler.notFound("Brochure");

      const updatePayload = {
        title,
        author,
        publishDate,
        category,
        published,
      };

      if (filename) {
        updatePayload.attachment = filename;

        const bannerAttachmentImagePath = getAssetPath(
          ASSET_URL_TYPE.brochureAttachmentImage,
          brochure.attachment
        );

        deleteFiles([{ path: bannerAttachmentImagePath }]);
      }

      await update(Brochure, brochureId, updatePayload);

      successResponse(res, 200, "Brochure updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE BROCHURE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateBrochureController;
