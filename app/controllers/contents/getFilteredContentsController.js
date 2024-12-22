const { ASSET_URL_TYPE } = require("../../constants");
const { Content } = require("../../models");
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

const getFilteredContentsController = {
  async getFilteredContents(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;
      const { type, published } = req.sanitizedQuery || {};

      const filter = {
        ...(type && { type }),
        ...(published && { published }),
      };

      let { records: contents, count } = await getAll(
        Content,
        limit,
        skip,
        "-deletedAt -content",
        filter
      );

      const totalPages = calculateTotalPages(count, limit);

      contents = contents.map((content) => ({
        ...content.toObject(),
        banner: getAssetUrl(
          req,
          ASSET_URL_TYPE.contentBannerImage,
          content.banner
        ),
      }));

      successResponse(res, 200, "Contents fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        contents,
      });
    } catch (error) {
      console.error("ERROR IN GETTING CONTENTS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getFilteredContentsController;
