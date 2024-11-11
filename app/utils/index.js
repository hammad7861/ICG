const getAssetUrl = require("./assetUrl");
const Email = require("./email");
const { successResponse, errorResponse } = require("./responses");
const calculateTotalPages = require("./totalPages");

module.exports = {
  successResponse,
  errorResponse,
  Email,
  getAssetUrl,
  calculateTotalPages,
};
