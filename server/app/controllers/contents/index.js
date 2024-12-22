const createContentController = require("./createContentController");
const getContentsController = require("./getContentsController");
const deleteContentController = require("./deleteContentController");
const getContentController = require("./getContentController");
const updateContentController = require("./updateContentController");
const getFilteredContentsController = require("./getFilteredContentsController");

module.exports = {
  getContentController,
  updateContentController,
  deleteContentController,
  createContentController,
  getContentsController,
  getFilteredContentsController,
};
