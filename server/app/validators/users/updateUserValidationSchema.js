const Joi = require("joi");
const { ALLOWED_MIME_TYPES } = require("../../constants");

const updateUserValidationSchema = {
  params: Joi.object({
    userId: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
  }),
  file: Joi.object({
    originalname: Joi.string().required(),
    mimetype: Joi.string()
      .valid(...ALLOWED_MIME_TYPES.profileImage)
      .required(),
    fieldname: Joi.string().valid("profileImage").required(),
    encoding: Joi.string().required(),
    destination: Joi.string().required(),
    filename: Joi.string().required(),
    path: Joi.string().required(),
    size: Joi.number().required(),
  })
    .optional()
    .label("profileImage"),
};

module.exports = updateUserValidationSchema;
