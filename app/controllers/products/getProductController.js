const { ASSET_URL_TYPE } = require("../../constants");
const {
  products: {
    getProductControllerQueries: { getProduct },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetUrl } = require("../../utils");

const getProductController = {
  async getProduct(req, res, next) {
    try {
      const { productId } = req.sanitizedParams;

      let product = await getProduct(productId);

      if (!product) throw CustomErrorHandler.notFound("Product");

      product.banner = getAssetUrl(
        req,
        ASSET_URL_TYPE.productBannerImage,
        product.banner
      );
      product.MSDS = getAssetUrl(
        req,
        ASSET_URL_TYPE.productMSDSDocument,
        product.MSDS
      );
      product.TDS = getAssetUrl(
        req,
        ASSET_URL_TYPE.productTDSDocument,
        product.TDS
      );

      successResponse(res, 200, "Product fetched", { product });
    } catch (error) {
      console.error("ERROR IN GETTING PRODUCT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getProductController;
