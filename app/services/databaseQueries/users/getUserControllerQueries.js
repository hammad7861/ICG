const { User } = require("../../../models");

const getUserControllerQueries = {
  async getUser(userId) {
    return User.findById(userId, "name email profileImage");
  },
};

module.exports = getUserControllerQueries;
