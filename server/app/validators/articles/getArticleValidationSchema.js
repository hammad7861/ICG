const Joi = require("joi");

const getArticleValidationSchema = {
  params: Joi.object({
    articleId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getArticleValidationSchema;
