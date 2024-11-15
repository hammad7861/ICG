const errorHandler = require("./errorHandler");
const expressLoggerHandler = require("./expressLogger");
const routeNotFoundHandler = require("./routeNotFoundHandler");
const validateInputs = require("./validateInputs");
const sanitizeInputs = require("./sanitizeInputs");
const paginationFormula = require("./paginationFormula.js");
const authMiddleware = require("./auth");

module.exports = {
  errorHandler,
  routeNotFoundHandler,
  expressLoggerHandler,
  validateInputs,
  sanitizeInputs,
  paginationFormula,
  authMiddleware,
};
