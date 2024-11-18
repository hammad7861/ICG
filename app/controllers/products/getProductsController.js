const { ASSET_URL_TYPE } = require("../../constants");
const {
  products: {
    getProductsControllerQueries: { getProducts },
  },
} = require("../../services");
const {
  successResponse,
  getAssetUrl,
  calculateTotalPages,
} = require("../../utils");

const getProductsController = {
  async getProducts(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;

      let { products, count } = await getProducts(limit, skip);

      const totalPages = calculateTotalPages(count, limit);

      products = products.map((product) => ({
        ...product.toObject(),
        banner: getAssetUrl(
          req,
          ASSET_URL_TYPE.productBannerImage,
          product.banner
        ),
        MSDS: getAssetUrl(
          req,
          ASSET_URL_TYPE.productMSDSDocument,
          product.MSDS
        ),
        TDS: getAssetUrl(req, ASSET_URL_TYPE.productTDSDocument, product.TDS),
      }));

      successResponse(res, 200, "Products fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        products,
      });
    } catch (error) {
      console.error("ERROR IN GETTING PRODUCTS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getProductsController;
