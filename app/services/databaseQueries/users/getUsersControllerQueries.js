const { User } = require("../../../models");

const getUsersControllerQueries = {
  async getUsers(limit, skip) {
    const query = { archived: false };
    const users = await User.find(query, "name email profileImage")
      .skip(skip)
      .limit(limit)
      .exec();
    const count = await User.countDocuments(query);

    return { users, count };
  },
};

module.exports = getUsersControllerQueries;
