const { Product } = require("../../../models");

const updateProductControllerQueries = {
  async updateProduct(productId, data) {
    return Product.findByIdAndUpdate(productId, data, {
      new: true,
      runValidators: true,
    });
  },
};

module.exports = updateProductControllerQueries;
