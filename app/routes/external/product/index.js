const productRouter = require("express").Router();

// controllers
const {
  products: {
    getProductsController,
    getProductController,
  },
} = require("../../../controllers");

// validators
const {
  products: {
    getProductsValidationSchema,
    getProductValidationSchema,
  },
} = require("../../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../../middlewares");

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

module.exports = productRouter;
