const bcrypt = require("bcrypt");
const { User } = require("../../../models");

const createUserControllerQueries = {
  async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    return User.create({
      ...userData,
      password: hashedPassword,
    });
  },
};

module.exports = createUserControllerQueries;
