const path = require("path");
const mediaAndNewsRouter = require("express").Router();

// controllers
const {
  mediaAndNews: {
    createMediaAndNewsController,
    getMediaAndNewssController,
    getMediaAndNewsController,
    updateMediaAndNewsController,
    deleteMediaAndNewsController,
  },
} = require("../../controllers");

// validators
const {
  mediaAndNews: {
    createMediaAndNewsValidationSchema,
    getMediaAndNewssValidationSchema,
    getMediaAndNewsValidationSchema,
    updateMediaAndNewsValidationSchema,
    deleteMediaAndNewsValidationSchema,
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
  bannerImage: path.resolve("assets/images/mediaAndNews/banners"),
};
const mediaAndNewsUpload = createMulterConfig(uploadPaths);

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

mediaAndNewsRouter.put(
  "/:mediaAndNewsId",
  mediaAndNewsUpload.single("bannerImage"),
  [validateInputs(updateMediaAndNewsValidationSchema), sanitizeInputs()],
  updateMediaAndNewsController.updateMediaAndNews
);

mediaAndNewsRouter.post(
  "/",
  mediaAndNewsUpload.single("bannerImage"),
  [validateInputs(createMediaAndNewsValidationSchema), sanitizeInputs()],
  createMediaAndNewsController.createMediaAndNews
);

mediaAndNewsRouter.delete(
  "/:mediaAndNewsId",
  [validateInputs(deleteMediaAndNewsValidationSchema), sanitizeInputs()],
  deleteMediaAndNewsController.deleteMediaAndNews
);

module.exports = mediaAndNewsRouter;
