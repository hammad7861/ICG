const productRouter = require("express").Router();

// controllers
const {
  products: { getFilteredProductsController, getProductController },
} = require("../../../controllers");

// validators
const {
  products: { getFilteredProductsValidationSchema, getProductValidationSchema },
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
    validateInputs(getFilteredProductsValidationSchema),
    sanitizeInputs(),
  ],
  getFilteredProductsController.getFilteredProducts
);

productRouter.get(
  "/:productId",
  [validateInputs(getProductValidationSchema), sanitizeInputs()],
  getProductController.getProduct
);

module.exports = productRouter;
