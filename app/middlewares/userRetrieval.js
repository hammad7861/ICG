const { userQuery } = require("../services");
const { CustomErrorHandler } = require("../services");

const userRetrieval = async (req, res, next) => {
  const { _id } = req.tokenPayload;

  try {
    const user = await userQuery({ _id });
    if (!user) throw CustomErrorHandler.notAuthorized();

    req.user = user;
    next();
  } catch (err) {
    next(CustomErrorHandler.notAuthorized());
  }
};

module.exports = userRetrieval;
