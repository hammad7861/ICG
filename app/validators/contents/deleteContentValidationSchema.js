const Joi = require("joi");

const deleteContentValidationSchema = {
  params: Joi.object({
    contentId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteContentValidationSchema;
