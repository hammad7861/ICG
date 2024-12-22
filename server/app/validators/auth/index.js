const forgotPasswordValidationSchema = require("./forgotPasswordValidationSchema");
const loginValidationSchema = require("./localLoginValidationSchema");
const resetPasswordValidationSchema = require("./resetPasswordValidationSchema");
const updatePasswordValidationSchema = require("./updatePasswordValidationSchema");

module.exports = {
  loginValidationSchema,
  updatePasswordValidationSchema,
  forgotPasswordValidationSchema,
  resetPasswordValidationSchema,
};
