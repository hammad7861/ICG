const { User } = require("../../../models");

const deleteUserControllerQueries = {
  async deleteUser(userId) {
    return User.findByIdAndUpdate(userId, {
      archived: true,
      deletedAt: new Date(),
    });
  },
};

module.exports = deleteUserControllerQueries;
