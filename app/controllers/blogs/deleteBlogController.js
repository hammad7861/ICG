const { ASSET_URL_TYPE } = require("../../constants");
const { Blog } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
    deleteControllerQueries: { deleteRecord },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const deleteBlogController = {
  async deleteBlog(req, res, next) {
    try {
      const {
        sanitizedParams: { blogId },
      } = req;

      const blog = await getOne(Blog, blogId);

      if (!blog) throw CustomErrorHandler.notFound("Blog");

      const bannerImagePath = getAssetPath(
        ASSET_URL_TYPE.blogBannerImage,
        blog.banner
      );

      const attachmentPath = getAssetPath(
        ASSET_URL_TYPE.blogFeaturedImage,
        blog.featured_image
      );

      await deleteRecord(Blog, blogId);

      deleteFiles([{ path: bannerImagePath }, { path: attachmentPath }]);

      successResponse(res, 200, "Blog deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE ARTICLE CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteBlogController;
