const { ASSET_URL_TYPE } = require("../../constants");
const {
  users: {
    updateUserControllerQueries: { updateUser },
    getUserControllerQueries: { getUser },
    commonUserControllerQueries: { emailExits },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse, getAssetPath, deleteFiles } = require("../../utils");

const updateUserController = {
  async updateUser(req, res, next) {
    try {
      const {
        sanitizedBody: { name, email },
        file: { filename } = {},
        sanitizedParams: { userId },
      } = req;

      const user = await getUser(userId);

      if (!user) throw CustomErrorHandler.notFound("User");

      if (user.email !== email) {
        const emailExists = await emailExits(email);

        if (emailExists)
          throw CustomErrorHandler.customClientMessage("Email already exits");
      }

      const profileImagePath = getAssetPath(
        ASSET_URL_TYPE.userProfileImage,
        user.profileImage
      );

      await updateUser(userId, { name, email, profileImage: filename });

      deleteFiles([{ path: profileImagePath }]);

      successResponse(res, 200, "User updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE USER CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = updateUserController;
