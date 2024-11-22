const path = require("path");
const blogRouter = require("express").Router();

// controllers
const {
  blogs: {
    createBlogController,
    getBlogsController,
    getBlogController,
    updateBlogController,
    deleteBlogController,
  },
} = require("../../controllers");

// validators
const {
  blogs: {
    createBlogValidationSchema,
    getBlogsValidationSchema,
    getBlogValidationSchema,
    updateBlogValidationSchema,
    deleteBlogValidationSchema,
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
  bannerImage: path.resolve("assets/images/blogs/banners"),
  featuredImage: path.resolve("assets/images/blogs/featured"),
};
const multiUpload = createMulterConfig(uploadPaths);

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

blogRouter.put(
  "/:blogId",
  multiUpload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "featuredImage", maxCount: 1 },
  ]),
  [validateInputs(updateBlogValidationSchema), sanitizeInputs()],
  updateBlogController.updateBlog
);

blogRouter.post(
  "/",
  multiUpload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "featuredImage", maxCount: 1 },
  ]),
  [validateInputs(createBlogValidationSchema), sanitizeInputs()],
  createBlogController.createBlog
);

blogRouter.delete(
  "/:blogId",
  [validateInputs(deleteBlogValidationSchema), sanitizeInputs()],
  deleteBlogController.deleteBlog
);

module.exports = blogRouter;
