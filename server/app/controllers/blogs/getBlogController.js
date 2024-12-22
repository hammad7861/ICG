const { ASSET_URL_TYPE } = require("../../constants");
const { Blog } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetUrl } = require("../../utils");

const getBlogController = {
  async getBlog(req, res, next) {
    try {
      const { blogId } = req.sanitizedParams;

      let blog = await getOne(Blog, blogId);

      if (!blog) throw CustomErrorHandler.notFound("Blog");

      blog.banner = getAssetUrl(
        req,
        ASSET_URL_TYPE.blogBannerImage,
        blog.banner
      );

      blog.featured_image = getAssetUrl(
        req,
        ASSET_URL_TYPE.blogFeaturedImage,
        blog.featured_image
      );

      successResponse(res, 200, "Blog fetched", { blog });
    } catch (error) {
      console.error("ERROR IN GETTING BLOG CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getBlogController;
