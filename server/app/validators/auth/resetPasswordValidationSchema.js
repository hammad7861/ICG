const Joi = require("joi");

const resetPasswordValidationSchema = {
  body: Joi.object({
    email: Joi.string().email().required(),
    resetCode: Joi.string().length(12).hex().required(),
    newPassword: Joi.string().required(),
    confirmNewPassword: Joi.string().required(),
  }),
};

module.exports = resetPasswordValidationSchema;
