const createContentValidationSchema = require("./createContentValidationSchema");
const deleteContentValidationSchema = require("./deleteContentValidationSchema");
const getContentsValidationSchema = require("./getContentsValidationSchema");
const getContentValidationSchema = require("./getContentValidationSchema");
const getFilteredContentsValidationSchema = require("./getFilteredContentsValidationSchema");
const updateContentValidationSchema = require("./updateContentValidationSchema");

module.exports = {
  getContentsValidationSchema,
  getContentValidationSchema,
  updateContentValidationSchema,
  deleteContentValidationSchema,
  createContentValidationSchema,
  getFilteredContentsValidationSchema,
};
