const Joi = require("joi");
const { ALLOWED_MIME_TYPES } = require("../../constants");

const createArticleValidationSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishDate: Joi.date().required(),
    articleCategory: Joi.string().required(),
    contentCategory: Joi.string().required(),
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
    description: Joi.string().required(),
  }),
  files: Joi.object({
    bannerImage: Joi.array()
      .items(
        Joi.object({
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
      )
      .required()
      .label("bannerImage"),
    articleAttachment: Joi.array()
      .items(
        Joi.object({
          originalname: Joi.string().required(),
          mimetype: Joi.string()
            .valid(...ALLOWED_MIME_TYPES.articleAttachment)
            .required(),
          fieldname: Joi.string().valid("articleAttachment").required(),
          encoding: Joi.string().required(),
          destination: Joi.string().required(),
          filename: Joi.string().required(),
          path: Joi.string().required(),
          size: Joi.number().required(),
        })
      )
      .optional()
      .label("articleAttachment"),
  }).required(),
};

module.exports = createArticleValidationSchema;
