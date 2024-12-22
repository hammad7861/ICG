const { CustomErrorHandler, userQuery, userUpdate } = require("../../services");
const bcrypt = require("bcrypt");
const moment = require("moment");
const { successResponse } = require("../../utils");

const resetPasswordController = {
  async resetPassword(req, res, next) {
    try {
      const { email, resetCode, newPassword, confirmNewPassword } =
        req.sanitizedBody;

      const currentTimestamp = moment.utc().unix();

      const user = await userQuery({
        email,
        passwordResetToken: resetCode,
        passwordResetExpires: { $gt: currentTimestamp },
      });

      if (!user)
        return next(
          CustomErrorHandler.customClientMessage(
            "Reset code is invalid or has expired"
          )
        );

      if (newPassword !== confirmNewPassword)
        return next(
          CustomErrorHandler.customClientMessage("Passwords do not match")
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
      console.error("ERROR IN RESET PASSWORD CONTROLLER:", error);
      return next(error);
    }
  },
};

module.exports = resetPasswordController;
