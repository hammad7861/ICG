const Joi = require("joi");
const { ALLOWED_MIME_TYPES } = require("../../constants");

const updateBlogValidationSchema = {
  params: Joi.object({
    blogId: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publishDate: Joi.date().required(),
    blogCategory: Joi.string().required(),
    tags: Joi.alternatives()
      .try(Joi.array().items(Joi.string()).unique(), Joi.string())
      .custom((value, helpers) => {
        if (typeof value === "string") {
          return [value];
        }
        return value;
      })
      .required(),
    contents: Joi.string().required(),
    sharing: Joi.boolean().required(),
    comments: Joi.boolean().required(),
    published: Joi.boolean().required(),
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
      .optional()
      .label("bannerImage"),
    featuredImage: Joi.array()
      .items(
        Joi.object({
          originalname: Joi.string().required(),
          mimetype: Joi.string()
            .valid(...ALLOWED_MIME_TYPES.bannerImage)
            .required(),
          fieldname: Joi.string().valid("featuredImage").required(),
          encoding: Joi.string().required(),
          destination: Joi.string().required(),
          filename: Joi.string().required(),
          path: Joi.string().required(),
          size: Joi.number().required(),
        })
      )
      .optional()
      .label("featuredImage"),
  }).optional(),
};

module.exports = updateBlogValidationSchema;
