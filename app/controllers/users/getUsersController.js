const { ASSET_URL_TYPE } = require("../../constants");
const { User } = require("../../models");
const {
  common: {
    getAllControllerQueries: { getAll },
  },
} = require("../../services");
const {
  successResponse,
  getAssetUrl,
  calculateTotalPages,
} = require("../../utils");

const getUsersController = {
  async getUsers(req, res, next) {
    try {
      const { page, limit, skip } = req.paginationValues;

      let { records: users, count } = await getAll(
        User,
        limit,
        skip,
        "-deletedAt -password -archived"
      );

      const totalPages = calculateTotalPages(count, limit);

      users = users.map((user) => ({
        ...user.toObject(),
        profileImage: getAssetUrl(
          req,
          ASSET_URL_TYPE.userProfileImage,
          user.profileImage
        ),
      }));

      successResponse(res, 200, "Users fetched", {
        currentPage: page,
        totalPages,
        total: count,
        limit,
        users,
      });
    } catch (error) {
      console.error("ERROR IN GETTING USERS CONTROLLER", error);
      return next(error);
    }
  },
};

module.exports = getUsersController;
