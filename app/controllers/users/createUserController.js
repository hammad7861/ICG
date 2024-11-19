const bcrypt = require("bcrypt");
const { User } = require("../../models");
const {
  users: {
    commonUserControllerQueries: { emailExits },
  },
  common: {
    createControllerQueries: { create },
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

      const hashedPassword = await bcrypt.hash(password, 10);

      const userData = {
        profileImage: filename,
        name,
        email,
        password: hashedPassword,
      };

      await create(User, userData);

      successResponse(res, 200, "User created successfully");
    } catch (error) {
      console.error("ERROR IN CREATE USER CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = createUserController;
