const arraySanitization = require("./arraySanitization");
const CustomErrorHandler = require("./CustomErrorHandler");
const JwtServices = require("./JwtServices");
const objectSanitization = require("./objectSanitization");
const users = require("./databaseQueries/users");
const common = require("./databaseQueries/common");
const userQuery = require("./databaseQueries/userQuery");
const userUpdate = require("./databaseQueries/userUpdate");

module.exports = {
  arraySanitization,
  CustomErrorHandler,
  JwtServices,
  objectSanitization,
  users,
  userQuery,
  userUpdate,
  common,
};
