const {
  JwtServices,
  CustomErrorHandler,
  userQuery,
} = require("../../services");
const bcrypt = require("bcrypt");
const { successResponse } = require("../../utils");

const localLoginController = {
  async login(req, res, next) {
    const { email, password } = req.sanitizedBody;
    try {
      const userToLogin = await userQuery({ email });
      if (!userToLogin) return next(CustomErrorHandler.wrongCredentials());

      const matchPassword = await bcrypt.compare(
        password,
        userToLogin.password
      );
      if (!matchPassword) return next(CustomErrorHandler.wrongCredentials());

      const accessToken = JwtServices.sign({
        _id: userToLogin._id,
      });

      successResponse(res, 200, "Authentication Successful", {
        _id: userToLogin._id,
        accessToken,
      });
    } catch (error) {
      console.error("ERROR IN LOGIN CONTROLLER:", error);
      return next(error);
    }
  },
};

module.exports = localLoginController;
