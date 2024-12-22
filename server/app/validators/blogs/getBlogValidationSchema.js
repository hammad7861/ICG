const Joi = require("joi");

const getBlogValidationSchema = {
  params: Joi.object({
    blogId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getBlogValidationSchema;
