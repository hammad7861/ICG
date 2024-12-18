const mediaAndNewsRouter = require("express").Router();

// controllers
const {
  mediaAndNews: {
    getMediaAndNewssController,
    getMediaAndNewsController,
  },
} = require("../../../controllers");

// validators
const {
  mediaAndNews: {
    getMediaAndNewssValidationSchema,
    getMediaAndNewsValidationSchema,
  },
} = require("../../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../../middlewares");

// routes
mediaAndNewsRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getMediaAndNewssValidationSchema),
    sanitizeInputs(),
  ],
  getMediaAndNewssController.getMediaAndNewss
);

mediaAndNewsRouter.get(
  "/:mediaAndNewsId",
  [validateInputs(getMediaAndNewsValidationSchema), sanitizeInputs()],
  getMediaAndNewsController.getMediaAndNews
);

module.exports = mediaAndNewsRouter;
