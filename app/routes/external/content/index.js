const path = require("path");
const contentRouter = require("express").Router();

// controllers
const {
  contents: { getFilteredContentsController, getContentController },
} = require("../../../controllers");

// validators
const {
  contents: { getFilteredContentsValidationSchema, getContentValidationSchema },
} = require("../../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../../middlewares");
// routes
contentRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getFilteredContentsValidationSchema),
    sanitizeInputs(),
  ],
  getFilteredContentsController.getFilteredContents
);

contentRouter.get(
  "/:contentId",
  [validateInputs(getContentValidationSchema), sanitizeInputs()],
  getContentController.getContent
);

module.exports = contentRouter;
