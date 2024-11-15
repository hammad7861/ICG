const { ASSET_URL_TYPE } = require("../../constants");
const {
  users: {
    deleteUserControllerQueries: { deleteUser },
    getUserControllerQueries: { getUser },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const deleteUserController = {
  async deleteUser(req, res, next) {
    try {
      const {
        sanitizedParams: { userId },
      } = req;

      const user = await getUser(userId);

      if (!user) throw CustomErrorHandler.notFound("User");

      const profileImagePath = getAssetPath(
        ASSET_URL_TYPE.userProfileImage,
        user.profileImage
      );

      await deleteUser(userId);

      deleteFiles([{ path: profileImagePath }]);

      successResponse(res, 200, "User deleted successfully");
    } catch (error) {
      console.error("ERROR IN DELETE USER CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = deleteUserController;
