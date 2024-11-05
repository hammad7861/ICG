const { Sequelize } = require("../models");
const { CustomErrorHandler } = require("../services");
const { errorResponse } = require("../utils");

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let data = {
    statusCode,
    message: err.message,
  };
  if (err instanceof Sequelize.UniqueConstraintError) {
    statusCode = 409;
    data = {
      statusCode,
      message: err.errors[0].message,
    };
  }
  if (err instanceof ValidationError) {
    statusCode = 422;
    data = {
      statusCode,
      message: err.message,
    };
  }

  if (err instanceof CustomErrorHandler) {
    statusCode = err.statusCode;
    data = {
      statusCode,
      message: err.message,
    };
  }
  if (err instanceof Sequelize.UniqueConstraintError) {
    data = {
      statusCode: 400,
      message: err.errors[0].message,
    };
  }

  return errorResponse(res, statusCode, data);
};

module.exports = errorHandler;
