const { User } = require("../../../models");

const commonUserControllerQueries = {
  async emailExits(email) {
    return !!(await User.findOne({
      email,
      archived: false,
    }));
  },
};

module.exports = commonUserControllerQueries;
