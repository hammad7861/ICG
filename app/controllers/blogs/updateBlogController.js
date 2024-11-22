const { ASSET_URL_TYPE } = require("../../constants");
const { Blog } = require("../../models");
const {
  common: {
    updateControllerQueries: { update },
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateBlogController = {
  async updateBlog(req, res, next) {
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
        files = {},
        sanitizedParams: { blogId },
      } = req;

      const blog = await getOne(Blog, blogId);

      if (!blog) throw CustomErrorHandler.notFound("Blog");

      const updatePayload = {
        title,
        author,
        publish_date: publishDate,
        blog_category: blogCategory,
        tags,
        contents,
        sharing,
        comments,
        published,
      };

      const filePathsToDelete = [];

      if (files) {
        if (files.bannerImage && files.bannerImage[0]) {
          const { filename: bannerImagefilename } = files.bannerImage[0];
          updatePayload.banner = bannerImagefilename;

          const bannerImagePath = getAssetPath(
            ASSET_URL_TYPE.blogBannerImage,
            blog.banner
          );
          filePathsToDelete.push({ path: bannerImagePath });
        }

        if (files.featuredImage && files.featuredImage[0]) {
          const { filename: featuredImageFilename } = files.featuredImage[0];
          updatePayload.featured_image = featuredImageFilename;

          const featuredImagePath = getAssetPath(
            ASSET_URL_TYPE.blogFeaturedImage,
            blog.featured_image
          );
          filePathsToDelete.push({ path: featuredImagePath });
        }
      }

      if (filePathsToDelete.length > 0) {
        deleteFiles(filePathsToDelete);
      }

      await update(Blog, blogId, updatePayload);

      successResponse(res, 200, "Blog updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE BLOG CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateBlogController;
