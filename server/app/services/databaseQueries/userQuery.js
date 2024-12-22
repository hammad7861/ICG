const { User } = require("../../models");

const userQuery = (filter = {}) => {
  return User.findOne({ ...filter, archived: false });
};

module.exports = userQuery;
