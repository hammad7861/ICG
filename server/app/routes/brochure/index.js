const path = require("path");
const brochureRouter = require("express").Router();

// controllers
const {
  brochures: {
    createBrochureController,
    getBrochuresController,
    getBrochureController,
    updateBrochureController,
    deleteBrochureController,
  },
} = require("../../controllers");

// validators
const {
  brochures: {
    createBrochureValidationSchema,
    getBrochuresValidationSchema,
    getBrochureValidationSchema,
    updateBrochureValidationSchema,
    deleteBrochureValidationSchema,
  },
} = require("../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../middlewares");
const createMulterConfig = require("../../config/multerConfig");
const { ASSET_URL_TYPE, ASSET_PATH_MAPPING } = require("../../constants");
const uploadPaths = {
  brochureAttachment: path.resolve(
    `assets/${ASSET_PATH_MAPPING[ASSET_URL_TYPE.brochureAttachmentImage]}`
  ),
};
const brochureUpload = createMulterConfig(uploadPaths);

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

brochureRouter.put(
  "/:brochureId",
  brochureUpload.single("brochureAttachment"),
  [validateInputs(updateBrochureValidationSchema), sanitizeInputs()],
  updateBrochureController.updateBrochure
);

brochureRouter.post(
  "/",
  brochureUpload.single("brochureAttachment"),
  [validateInputs(createBrochureValidationSchema), sanitizeInputs()],
  createBrochureController.createBrochure
);

brochureRouter.delete(
  "/:brochureId",
  [validateInputs(deleteBrochureValidationSchema), sanitizeInputs()],
  deleteBrochureController.deleteBrochure
);

module.exports = brochureRouter;
