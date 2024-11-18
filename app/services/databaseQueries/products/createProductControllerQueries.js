const { Product } = require("../../../models");

const createProductControllerQueries = {
  async createProduct(productData) {
    return Product.create(productData);
  },
};

module.exports = createProductControllerQueries;
