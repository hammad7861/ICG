const { User } = require("../../../models");

const getUserControllerQueries = {
  async getUser(userId) {
    return User.findOne(
      { _id: userId, archived: false },
      "name email profileImage"
    );
  },
};

module.exports = getUserControllerQueries;
