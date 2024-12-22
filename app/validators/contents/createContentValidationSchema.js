const Joi = require("joi");
const { ALLOWED_MIME_TYPES } = require("../../constants");

const createContentValidationSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishDate: Joi.date().required(),
    type: Joi.string().required(),
    tags: Joi.alternatives()
      .try(Joi.array().items(Joi.string()).unique(), Joi.string())
      .custom((value, helpers) => {
        if (typeof value === "string") {
          return [value];
        }
        return value;
      })
      .required(),
    summary: Joi.string().required(),
    content: Joi.string().required(),
    published: Joi.boolean().required(),
  }),
  file: Joi.object({
    originalname: Joi.string().required(),
    mimetype: Joi.string()
      .valid(...ALLOWED_MIME_TYPES.bannerImage)
      .required(),
    fieldname: Joi.string().valid("bannerImage").required(),
    encoding: Joi.string().required(),
    destination: Joi.string().required(),
    filename: Joi.string().required(),
    path: Joi.string().required(),
    size: Joi.number().required(),
  })
    .required()
    .label("bannerImage"),
};

module.exports = createContentValidationSchema;
