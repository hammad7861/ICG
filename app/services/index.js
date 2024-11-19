const arraySanitization = require("./arraySanitization");
const CustomErrorHandler = require("./CustomErrorHandler");
const JwtServices = require("./JwtServices");
const objectSanitization = require("./objectSanitization");
const users = require("./databaseQueries/users");
const products = require("./databaseQueries/products");
const events = require("./databaseQueries/events");
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
  events,
  products,
};
