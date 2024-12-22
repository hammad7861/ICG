const path = require("path");
const contentRouter = require("express").Router();

// controllers
const {
  contents: {
    createContentController,
    getContentsController,
    getContentController,
    updateContentController,
    deleteContentController,
  },
} = require("../../controllers");

// validators
const {
  contents: {
    createContentValidationSchema,
    getContentsValidationSchema,
    getContentValidationSchema,
    updateContentValidationSchema,
    deleteContentValidationSchema,
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
  bannerImage: path.resolve("assets/images/contents/banners"),
};
const contentUpload = createMulterConfig(uploadPaths);

// routes
contentRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getContentsValidationSchema),
    sanitizeInputs(),
  ],
  getContentsController.getContents
);

contentRouter.get(
  "/:contentId",
  [validateInputs(getContentValidationSchema), sanitizeInputs()],
  getContentController.getContent
);

contentRouter.put(
  "/:contentId",
  contentUpload.single("bannerImage"),
  [validateInputs(updateContentValidationSchema), sanitizeInputs()],
  updateContentController.updateContent
);

contentRouter.post(
  "/",
  contentUpload.single("bannerImage"),
  [validateInputs(createContentValidationSchema), sanitizeInputs()],
  createContentController.createContent
);

contentRouter.delete(
  "/:contentId",
  [validateInputs(deleteContentValidationSchema), sanitizeInputs()],
  deleteContentController.deleteContent
);

module.exports = contentRouter;
