const articleRouter = require("express").Router();

// controllers
const {
  articles: {
    getArticlesController,
    getArticleController,
  },
} = require("../../../controllers");

// validators
const {
  articles: {
    getArticlesValidationSchema,
    getArticleValidationSchema,
  },
} = require("../../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../../middlewares");

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

module.exports = articleRouter;
