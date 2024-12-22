const { ASSET_URL_TYPE } = require("../../constants");
const { User } = require("../../models");
const {
  common: {
    getOneControllerQueries: { getOne },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetUrl } = require("../../utils");

const getUserController = {
  async getUser(req, res, next) {
    try {
      const { userId } = req.sanitizedParams;

      let user = await getOne(User, userId, "-deletedAt -password -archived");

      if (!user) throw CustomErrorHandler.notFound("User");

      user.profileImage = getAssetUrl(
        req,
        ASSET_URL_TYPE.userProfileImage,
        user.profileImage
      );

      successResponse(res, 200, "User fetched", { user });
    } catch (error) {
      console.error("ERROR IN GETTING USER CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getUserController;
