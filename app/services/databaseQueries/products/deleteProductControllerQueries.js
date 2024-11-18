const { Product } = require("../../../models");

const deleteProductControllerQueries = {
  async deleteProduct(productId) {
    return Product.findByIdAndUpdate(productId, {
      archived: true,
      deletedAt: new Date(),
    });
  },
};

module.exports = deleteProductControllerQueries;
