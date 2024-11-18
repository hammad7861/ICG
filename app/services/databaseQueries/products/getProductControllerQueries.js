const { Product } = require("../../../models");

const getProductControllerQueries = {
  async getProduct(productId) {
    return Product.findOne(
      { _id: productId, archived: false },
      "-deletedAt -createdAt -updatedAt -__v"
    );
  },
};

module.exports = getProductControllerQueries;
