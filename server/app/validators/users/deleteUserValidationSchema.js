const Joi = require("joi");

const deleteUserValidationSchema = {
  params: Joi.object({
    userId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteUserValidationSchema;
