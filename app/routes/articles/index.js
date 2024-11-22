const path = require("path");
const articleRouter = require("express").Router();

// controllers
const {
  articles: {
    createArticleController,
    getArticlesController,
    getArticleController,
    updateArticleController,
    deleteArticleController,
  },
} = require("../../controllers");

// validators
const {
  articles: {
    createArticleValidationSchema,
    getArticlesValidationSchema,
    getArticleValidationSchema,
    updateArticleValidationSchema,
    deleteArticleValidationSchema,
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
  bannerImage: path.resolve("assets/images/articles/banners"),
  articleAttachmet: path.resolve("assets/documents/articles/attachments"),
};
const multiUpload = createMulterConfig(uploadPaths);

// routes
articleRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getArticlesValidationSchema),
    sanitizeInputs(),
  ],
  getArticlesController.getArticles
);

articleRouter.get(
  "/:articleId",
  [validateInputs(getArticleValidationSchema), sanitizeInputs()],
  getArticleController.getArticle
);

articleRouter.put(
  "/:articleId",
  multiUpload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "articleAttachmet", maxCount: 1 },
  ]),
  [validateInputs(updateArticleValidationSchema), sanitizeInputs()],
  updateArticleController.updateArticle
);

articleRouter.post(
  "/",
  multiUpload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "articleAttachmet", maxCount: 1 },
  ]),
  [validateInputs(createArticleValidationSchema), sanitizeInputs()],
  createArticleController.createArticle
);

articleRouter.delete(
  "/:articleId",
  [validateInputs(deleteArticleValidationSchema), sanitizeInputs()],
  deleteArticleController.deleteArticle
);

module.exports = articleRouter;
