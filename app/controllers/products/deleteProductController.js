const { ASSET_URL_TYPE } = require("../../constants");
const {
  products: {
    deleteProductControllerQueries: { deleteProduct },
    getProductControllerQueries: { getProduct },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const deleteProductController = {
  async deleteProduct(req, res, next) {
    try {
      const {
        sanitizedParams: { productId },
      } = req;

      const product = await getProduct(productId);

      if (!product) throw CustomErrorHandler.notFound("Product");

      const filePathsToDelete = [
        {
          path: getAssetPath(ASSET_URL_TYPE.productBannerImage, product.banner),
        },
        {
          path: getAssetPath(ASSET_URL_TYPE.productMSDSDocument, product.MSDS),
        },
        { path: getAssetPath(ASSET_URL_TYPE.productTDSDocument, product.TDS) },
      ];

      await deleteProduct(productId);

      deleteFiles(filePathsToDelete);

      successResponse(res, 200, "Product deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE PRODUCT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteProductController;
