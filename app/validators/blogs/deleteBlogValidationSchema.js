const Joi = require("joi");

const deleteBlogValidationSchema = {
  params: Joi.object({
    blogId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteBlogValidationSchema;
