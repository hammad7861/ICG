const { Product } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
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

      const product = await getOne(Product, productId);

      if (!product) throw CustomErrorHandler.notFound("Product");

      const uploadPayload = {
        published,
      };

      await update(Product, productId, uploadPayload);

      successResponse(res, 200, "Product publish status updated successfully");
    } catch (error) {
      console.error("ERROR IN PUBLISH PRODUCT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = publishProductController;
