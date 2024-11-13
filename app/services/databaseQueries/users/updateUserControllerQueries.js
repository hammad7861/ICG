const { User } = require("../../../models");

const updateUserControllerQueries = {
  async updateUser(userId, data) {
    return User.findByIdAndUpdate(userId, data, {
      new: true,
      runValidators: true,
    });
  },
};

module.exports = updateUserControllerQueries;
