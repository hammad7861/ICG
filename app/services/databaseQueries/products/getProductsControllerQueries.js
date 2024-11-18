const { Product } = require("../../../models");

const getProductsControllerQueries = {
  async getProducts(limit, skip) {
    const query = { archived: false };
    const products = await Product.find(
      query,
      "-deletedAt -createdAt -updatedAt -__v"
    )
      .skip(skip)
      .limit(limit)
      .exec();
    const count = await Product.countDocuments(query);

    return { products, count };
  },
};

module.exports = getProductsControllerQueries;
