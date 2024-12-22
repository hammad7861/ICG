const Joi = require("joi");

const forgotPasswordValidationSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
  }),
};

module.exports = forgotPasswordValidationSchema;
