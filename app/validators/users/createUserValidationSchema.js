const Joi = require("joi");

const createUserValidationSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
  file: Joi.object({
    originalname: Joi.string().required(),
    mimetype: Joi.string()
      .valid(
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
        "image/bmp",
        "image/tiff",
        "image/svg+xml"
      )
      .required(),
    fieldname: Joi.string().valid("profileImage").required(),
    encoding: Joi.string().required(),
    destination: Joi.string().required(),
    filename: Joi.string().required(),
    path: Joi.string().required(),
    size: Joi.number().required(),
  })
    .required()
    .label("profileImage"),
};

module.exports = createUserValidationSchema;
