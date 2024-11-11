const Joi = require("joi");

const getUserValidationSchema = {
  params: Joi.object({
    userId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getUserValidationSchema;
