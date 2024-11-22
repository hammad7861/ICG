const Joi = require("joi");

const getBrochureValidationSchema = {
  params: Joi.object({
    brochureId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getBrochureValidationSchema;
