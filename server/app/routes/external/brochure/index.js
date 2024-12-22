const brochureRouter = require("express").Router();

// controllers
const {
  brochures: {
    getBrochuresController,
    getBrochureController,
  },
} = require("../../../controllers");

// validators
const {
  brochures: {
    getBrochuresValidationSchema,
    getBrochureValidationSchema,
  },
} = require("../../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../../middlewares");

// routes
brochureRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getBrochuresValidationSchema),
    sanitizeInputs(),
  ],
  getBrochuresController.getBrochures
);

brochureRouter.get(
  "/:brochureId",
  [validateInputs(getBrochureValidationSchema), sanitizeInputs()],
  getBrochureController.getBrochure
);

module.exports = brochureRouter;
