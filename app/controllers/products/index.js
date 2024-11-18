const createProductController = require("./createProductController");
const deleteProductController = require("./deleteProductController");
const getProductController = require("./getProductController");
const getProductsController = require("./getProductsController");
const updateProductController = require("./updateProductController");
const publishProductController = require("./publishProductController");

module.exports = {
  createProductController,
  getProductsController,
  getProductController,
  updateProductController,
  deleteProductController,
  publishProductController,
};