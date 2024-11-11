const moment = require("moment");
const {
  users: {
    createUserControllerQueries: { createUser },
    commonUserControllerQueries: { emailExits },
  },
  CustomErrorHandler,
} = require("../../services");
const { successResponse } = require("../../utils");

const createUserController = {
  async createUser(req, res, next) {
    try {
      const { name, email, password } = req.sanitizedBody;
      const { filename } = req.file;

      const emailExists = await emailExits(email);

      if (emailExists)
        throw CustomErrorHandler.customClientMessage("Email already exits");

      const userData = {
        profileImage: filename,
        name,
        email,
        password,
      };

      await createUser(userData);

      successResponse(res, 200, "User created sucessfully");
    } catch (error) {
      console.error("ERROR IN CREATE USER CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createUserController;
