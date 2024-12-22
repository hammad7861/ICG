const { User } = require("../../models");

const userUpdate = (query, data) => {
  return User.updateOne({ ...query, archived: false }, data);
};

module.exports = userUpdate;
