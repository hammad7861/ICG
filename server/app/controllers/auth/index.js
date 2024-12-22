const forgotPasswordController = require("./forgotPasswordController");
const localLoginController = require("./localLoginController");
const resetPasswordController = require("./resetPasswordController");
const updatePasswordController = require("./updatePasswordController");

module.exports = {
  localLoginController,
  updatePasswordController,
  forgotPasswordController,
  resetPasswordController,
};
