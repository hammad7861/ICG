const {
  products: {
    updateProductControllerQueries: { updateProduct },
    getProductControllerQueries: { getProduct },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse } = require("../../utils");

const publishProductController = {
  async publishProduct(req, res, next) {
    try {
      const {
        sanitizedBody: { published },
        sanitizedParams: { productId },
      } = req;

      const product = await getProduct(productId);

      if (!product) throw CustomErrorHandler.notFound("Product");

      const uploadPayload = {
        published,
      };

      await updateProduct(productId, uploadPayload);

      successResponse(res, 200, "Product publish status updated successfully");
    } catch (error) {
      console.error("ERROR IN PUBLISH PRODUCT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = publishProductController;
