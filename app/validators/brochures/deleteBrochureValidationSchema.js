const Joi = require("joi");

const deleteEventValidationSchema = {
  params: Joi.object({
    brochureId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteEventValidationSchema;
