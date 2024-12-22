const { ASSET_URL_TYPE } = require("../../constants");
const { Product } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateProductController = {
  async updateProduct(req, res, next) {
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
        files,
        sanitizedParams: { productId },
      } = req;

      const product = await getOne(Product, productId);

      if (!product) throw CustomErrorHandler.notFound("Product");

      const uploadPayload = {
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

      const filePathsToDelete = [];

      if (files) {
        if (files.bannerImage && files.bannerImage[0]) {
          const { filename: bannerImagefilename } = files.bannerImage[0];
          uploadPayload.banner = bannerImagefilename;

          const bannerImagePath = getAssetPath(
            ASSET_URL_TYPE.productBannerImage,
            product.banner
          );
          filePathsToDelete.push({ path: bannerImagePath });
        }

        if (files.MSDS && files.MSDS[0]) {
          const { filename: MSDSfilename } = files.MSDS[0];
          uploadPayload.MSDS = MSDSfilename;

          const MSDSPath = getAssetPath(
            ASSET_URL_TYPE.productMSDSDocument,
            product.MSDS
          );
          filePathsToDelete.push({ path: MSDSPath });
        }

        if (files.TDS && files.TDS[0]) {
          const { filename: TDSfilename } = files.TDS[0];
          uploadPayload.TDS = TDSfilename;

          const TDSPath = getAssetPath(
            ASSET_URL_TYPE.productTDSDocument,
            product.TDS
          );
          filePathsToDelete.push({ path: TDSPath });
        }
      }

      if (filePathsToDelete.length > 0) {
        deleteFiles(filePathsToDelete);
      }

      await update(Product, productId, uploadPayload);

      successResponse(res, 200, "Product updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE PRODUCT CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateProductController;
