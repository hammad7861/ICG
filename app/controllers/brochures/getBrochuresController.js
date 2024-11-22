const { ASSET_URL_TYPE } = require("../../constants");
const { Brochure } = require("../../models");
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

const getBrochuresController = {
  async getBrochures(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;

      let { records: brochures, count } = await getAll(Brochure, limit, skip);

      const totalPages = calculateTotalPages(count, limit);

      brochures = brochures.map((brochure) => ({
        ...brochure.toObject(),
        attachment: getAssetUrl(
          req,
          ASSET_URL_TYPE.brochureAttachmentImage,
          brochure.attachment
        ),
      }));

      successResponse(res, 200, "Brochures fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        brochures,
      });
    } catch (error) {
      console.error("ERROR IN GETTING BROCHURES CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getBrochuresController;
