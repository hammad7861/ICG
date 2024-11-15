const { CustomErrorHandler, userQuery, userUpdate } = require("../../services");
const crypto = require("crypto");
const moment = require("moment");
const Email = require("../../utils/email");
const { successResponse } = require("../../utils");

const forgotPasswordController = {
  async forgotPassword(req, res, next) {
    try {
      const { email } = req.sanitizedBody;
      const user = await userQuery({ email });

      if (!user) return next(CustomErrorHandler.notFound("User"));

      const resetCode = crypto.randomBytes(6).toString("hex");

      const expiryTime = moment.utc().add(5, "minutes").unix();

      await userUpdate(
        { email },
        {
          passwordResetToken: resetCode,
          passwordResetExpires: expiryTime,
        }
      );

      // TODO - add a flow for reset code
      // await new Email(user, resetCode).sendPasswordReset();

      successResponse(res, 200, "Reset code sent to email");
    } catch (error) {
      console.error("ERROR IN REQUEST RESET CONTROLLER:", error);
      return next(error);
    }
  },
};

module.exports = forgotPasswordController;
