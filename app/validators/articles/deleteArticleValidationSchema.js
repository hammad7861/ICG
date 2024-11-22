const Joi = require("joi");

const deleteArticleValidationSchema = {
  params: Joi.object({
    articleId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteArticleValidationSchema;
