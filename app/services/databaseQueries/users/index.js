const commonUserControllerQueries = require("./commonUserControllerQueries");
const createUserControllerQueries = require("./createUserControllerQueries");
const deleteUserControllerQueries = require("./deleteUserControllerQueries");
const getUserControllerQueries = require("./getUserControllerQueries");
const getUsersControllerQueries = require("./getUsersControllerQueries");
const updateUserControllerQueries = require("./updateUserControllerQueries");

module.exports = {
  createUserControllerQueries,
  commonUserControllerQueries,
  getUserControllerQueries,
  getUsersControllerQueries,
  updateUserControllerQueries,
  deleteUserControllerQueries,
};
