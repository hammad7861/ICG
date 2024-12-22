const createProductController = require("./createProductController");
const deleteProductController = require("./deleteProductController");
const getProductController = require("./getProductController");
const getProductsController = require("./getProductsController");
const updateProductController = require("./updateProductController");
const publishProductController = require("./publishProductController");
const getFilteredProductsController = require("./getFilteredProductsController");
const bulkCreateProductController = require("./bulkCreateProductController");

module.exports = {
  createProductController,
  getProductsController,
  getProductController,
  updateProductController,
  deleteProductController,
  publishProductController,
  getFilteredProductsController,
  bulkCreateProductController,
};
