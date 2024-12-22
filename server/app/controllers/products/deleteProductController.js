const { ASSET_URL_TYPE } = require("../../constants");
const { Product } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
    deleteControllerQueries: { deleteRecord },
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

      const product = await getOne(Product, productId);

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

      await deleteRecord(Product, productId);

      deleteFiles(filePathsToDelete);

      successResponse(res, 200, "Product deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE PRODUCT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteProductController;
