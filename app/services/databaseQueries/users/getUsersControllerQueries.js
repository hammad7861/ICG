const { User } = require("../../../models");

const getUsersControllerQueries = {
  async getUsers(limit, skip) {
    const users = await User.find({}, "name email profileImage")
      .skip(skip)
      .limit(limit)
      .exec();
    const count = await User.countDocuments();

    return { users, count };
  },
};

module.exports = getUsersControllerQueries;
