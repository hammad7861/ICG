const { errorResponse } = require("../utils");

const routeNotFoundHandler = (req, res, next) => {
  let statusCode = 404,
    message = `Cannot ${req.method} ${req.url}`;

  return errorResponse(res, statusCode, message);
};

module.exports = routeNotFoundHandler;
