const { errorResponse, deleteFiles } = require("../utils");
const { CustomErrorHandler } = require("../services");

const errorHandler = (err, req, res, next) => {
  const files = req.file ? [req.file] : req.files || [];

  deleteFiles(files);

  if (err instanceof CustomErrorHandler) {
    return errorResponse(res, err.statusCode, err.message);
  }

  return errorResponse(
    res,
    err.status || 500,
    err.message || "Internal Server Error"
  );
};

module.exports = errorHandler;
