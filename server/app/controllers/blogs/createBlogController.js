const { Blog } = require("../../models");
const {
  common: {
    createControllerQueries: { create },
  },
} = require("../../services");
const { successResponse } = require("../../utils");

const createBlogController = {
  async createBlog(req, res, next) {
    try {
      const {
        sanitizedBody: {
          title,
          author,
          publishDate,
          blogCategory,
          tags,
          contents,
          sharing,
          comments,
          published,
        },
        files: {
          bannerImage: [{ filename: bannerImagefilename }],
          featuredImage: [{ filename: featuredImagefilename }],
        },
      } = req;

      const articleData = {
        banner: bannerImagefilename,
        title,
        author,
        publish_date: publishDate,
        blog_category: blogCategory,
        tags,
        contents,
        sharing,
        comments,
        published,
        featured_image: featuredImagefilename,
      };

      await create(Blog, articleData);

      successResponse(res, 200, "Blog created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE BLOG CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createBlogController;
