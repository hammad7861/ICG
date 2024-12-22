const Joi = require("joi");

const loginValidationSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
};

module.exports = loginValidationSchema;
