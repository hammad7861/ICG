const createArticleValidationSchema = require("./createArticleValidationSchema");
const deleteArticleValidationSchema = require("./deleteArticleValidationSchema");
const getArticlesValidationSchema = require("./getArticlesValidationSchema");
const getArticleValidationSchema = require("./getArticleValidationSchema");
const updateArticleValidationSchema = require("./updateArticleValidationSchema");

module.exports = {
  createArticleValidationSchema,
  getArticlesValidationSchema,
  getArticleValidationSchema,
  updateArticleValidationSchema,
  deleteArticleValidationSchema,
};
