const Joi = require("joi");

const updatePasswordValidationSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    currentPassword: Joi.string().required(),
    newPassword: Joi.string().required(),
    confirmNewPassword: Joi.string().required(),
  }),
};

module.exports = updatePasswordValidationSchema;
