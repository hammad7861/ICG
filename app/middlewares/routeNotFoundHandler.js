const { errorResponse } = require("../utils");

const routeNotFoundHandler = (req, res, next) => {
  let statusCode = 404;
  let data = {
    statusCode,
    message: `Cannot ${req.method} ${req.url}`,
  };

  return errorResponse(res, statusCode, data);
};

module.exports = routeNotFoundHandler;
