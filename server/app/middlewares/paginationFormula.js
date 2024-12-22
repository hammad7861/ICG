const { CustomErrorHandler } = require("../services");

const paginationFormula = (req, res, next) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  if (!Number(page) || !Number(limit) || page < 1 || limit < 1) {
    return next(
      CustomErrorHandler.customClientMessage("Invalid pagination parameters")
    );
  }

  const skip = (page - 1) * limit;

  req.paginationValues = { page, limit, skip };

  next();
};

module.exports = paginationFormula;
