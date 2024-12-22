const Joi = require("joi");

const getContentValidationSchema = {
  params: Joi.object({
    contentId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getContentValidationSchema;
