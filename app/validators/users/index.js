const createUserValidationSchema = require("./createUserValidationSchema");
const getUsersValidationSchema = require("./getUsersValidationSchema");
const getUserValidationSchema = require("./getUserValidationSchema");
const updateUserValidationSchema = require("./updateUserValidationSchema");

module.exports = {
  createUserValidationSchema,
  getUserValidationSchema,
  getUsersValidationSchema,
  updateUserValidationSchema,
};
