const { Product } = require("../../models");
const {
  common: {
    createControllerQueries: { create },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const bulkCreateProductController = {
  async bulkCreateProduct(req, res, next) {
    try {
      const {
        sanitizedBody: { products },
      } = req;

      const productDataArray = products.map((product) => ({
        cas_no: product.casNo,
        chemical_name: product.chemicalName,
        name: product.name,
        category_name: product.categoryName,
        molecular_formula: product.molecularFormula,
        details: product.details,
        published: product.published,
        molecular_weight: product.molecularWeight,
        form: product.productForm,
      }));

      await create(Product, productDataArray);

      successResponse(res, 200, "Products bulk created successfully");
    } catch (error) {
      console.error("ERROR IN BULK CREATE PRODUCT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = bulkCreateProductController;
