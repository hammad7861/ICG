const getAssetPath = require("./assertPath");
const getAssetUrl = require("./assetUrl");
const Email = require("./email");
const deleteFiles = require("./files");
const { successResponse, errorResponse } = require("./responses");
const calculateTotalPages = require("./totalPages");

module.exports = {
  successResponse,
  errorResponse,
  Email,
  getAssetUrl,
  calculateTotalPages,
  getAssetPath,
  deleteFiles,
};
