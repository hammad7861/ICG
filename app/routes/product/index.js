const path = require("path");
const productRouter = require("express").Router();

// controllers
const {
  products: {
    createProductController,
    getProductsController,
    getProductController,
    updateProductController,
    deleteProductController,
    publishProductController,
  },
} = require("../../controllers");

// validators
const {
  products: {
    createProductValidationSchema,
    getProductsValidationSchema,
    getProductValidationSchema,
    updateProductValidationSchema,
    deleteProductValidationSchema,
    publishProductValidationSchema,
  },
} = require("../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../middlewares");
const createMulterConfig = require("../../config/multerConfig");
const uploadPaths = {
  bannerImage: path.resolve("assets/images/products/banners"),
  MSDS: path.resolve("assets/documents/products/msds"),
  TDS: path.resolve("assets/documents/products/tds"),
};
const multiUpload = createMulterConfig(uploadPaths);

// routes
productRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getProductsValidationSchema),
    sanitizeInputs(),
  ],
  getProductsController.getProducts
);

productRouter.get(
  "/:productId",
  [validateInputs(getProductValidationSchema), sanitizeInputs()],
  getProductController.getProduct
);

productRouter.put(
  "/:productId",
  multiUpload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "MSDS", maxCount: 1 },
    { name: "TDS", maxCount: 1 },
  ]),
  [validateInputs(updateProductValidationSchema), sanitizeInputs()],
  updateProductController.updateProduct
);

productRouter.put(
  "/:productId/publish",
  [validateInputs(publishProductValidationSchema), sanitizeInputs()],
  publishProductController.publishProduct
);

productRouter.post(
  "/",
  multiUpload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "MSDS", maxCount: 1 },
    { name: "TDS", maxCount: 1 },
  ]),
  [validateInputs(createProductValidationSchema), sanitizeInputs()],
  createProductController.createProduct
);

productRouter.delete(
  "/:productId",
  [validateInputs(deleteProductValidationSchema), sanitizeInputs()],
  deleteProductController.deleteProduct
);

module.exports = productRouter;
