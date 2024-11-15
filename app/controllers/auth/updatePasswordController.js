const { CustomErrorHandler, userQuery, userUpdate } = require("../../services");
const bcrypt = require("bcrypt");
const { successResponse } = require("../../utils");

const updatePasswordController = {
  async updatePassword(req, res, next) {
    try {
      const { email, currentPassword, newPassword, confirmNewPassword } =
        req.sanitizedBody;

      const user = await userQuery({ email });

      if (!user) return next(CustomErrorHandler.notFound("User not found"));

      const matchPassword = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!matchPassword)
        return next(
          CustomErrorHandler.wrongCredentials("Current password is incorrect")
        );

      if (newPassword !== confirmNewPassword)
        return next(
          CustomErrorHandler.customClientMessage("New passwords do not match")
        );

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await userUpdate(
        { email },
        {
          password: hashedPassword,
          passwordResetToken: null,
          passwordResetExpires: null,
        }
      );

      successResponse(res, 200, "Password updated successfully");
    } catch (error) {
      console.error("ERROR IN UPDATE PASSWORD CONTROLLER:", error);
      return next(error);
    }
  },
};

module.exports = updatePasswordController;
