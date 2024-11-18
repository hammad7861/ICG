const {
  products: {
    createProductControllerQueries: { createProduct },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const createProductController = {
  async createProduct(req, res, next) {
    try {
      const {
        sanitizedBody: {
          casNo,
          chemicalName,
          name,
          categoryName,
          industryName,
          molecularFormula,
          molecularWeight,
          form,
          details,
          published,
        },
        files: {
          bannerImage: [{ filename: bannerImagefilename }],
          MSDS: [{ filename: MSDSfilename }],
          TDS: [{ filename: TDSfilename }],
        },
      } = req;

      const productData = {
        banner: bannerImagefilename,
        MSDS: MSDSfilename,
        TDS: TDSfilename,
        cas_no: casNo,
        chemical_name: chemicalName,
        name,
        category_name: categoryName,
        industry_name: industryName,
        molecular_formula: molecularFormula,
        molecular_weight: molecularWeight,
        form,
        details,
        published,
      };

      await createProduct(productData);

      successResponse(res, 200, "Product created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE PRODUCT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createProductController;
