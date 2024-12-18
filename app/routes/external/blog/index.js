const blogRouter = require("express").Router();

// controllers
const {
  blogs: {
    getBlogsController,
    getBlogController,
  },
} = require("../../../controllers");

// validators
const {
  blogs: {
    getBlogsValidationSchema,
    getBlogValidationSchema,
  },
} = require("../../../validators");

// middlewares
const {
  validateInputs,
  sanitizeInputs,
  paginationFormula,
} = require("../../../middlewares");

// routes
blogRouter.get(
  "/",
  [
    paginationFormula,
    validateInputs(getBlogsValidationSchema),
    sanitizeInputs(),
  ],
  getBlogsController.getBlogs
);

blogRouter.get(
  "/:blogId",
  [validateInputs(getBlogValidationSchema), sanitizeInputs()],
  getBlogController.getBlog
);

module.exports = blogRouter;
