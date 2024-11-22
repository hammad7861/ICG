const { ASSET_URL_TYPE } = require("../../constants");
const { Blog } = require("../../models");
const {
  common: {
    getAllControllerQueries: { getAll },
  },
} = require("../../services");
const {
  successResponse,
  getAssetUrl,
  calculateTotalPages,
} = require("../../utils");

const getBlogsController = {
  async getBlogs(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;

      let { records: blogs, count } = await getAll(Blog, limit, skip);

      const totalPages = calculateTotalPages(count, limit);

      blogs = blogs.map((blog) => ({
        ...blog.toObject(),
        banner: getAssetUrl(req, ASSET_URL_TYPE.blogBannerImage, blog.banner),
        featured_image: getAssetUrl(
          req,
          ASSET_URL_TYPE.blogFeaturedImage,
          blog.featured_image
        ),
      }));

      successResponse(res, 200, "Blogs fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        blogs,
      });
    } catch (error) {
      console.error("ERROR IN GETTING BLOGS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getBlogsController;
