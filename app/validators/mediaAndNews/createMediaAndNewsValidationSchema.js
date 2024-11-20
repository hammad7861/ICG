const Joi = require("joi");
const {
  ALLOWED_MIME_TYPES,
  ALLOWED_MEDIA_AND_NEWS_TYPES,
  MEDIA_AND_NEWS_TYPES,
} = require("../../constants");

const createMediaAndNewsValidationSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    publishDate: Joi.date().required(),
    type: Joi.string()
      .valid(...ALLOWED_MEDIA_AND_NEWS_TYPES)
      .required(),
    name: Joi.string().when("type", {
      is: MEDIA_AND_NEWS_TYPES.NEWS_ANNOUNCEMENT,
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
    email: Joi.string().email().when("type", {
      is: MEDIA_AND_NEWS_TYPES.NEWS_ANNOUNCEMENT,
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
    contact: Joi.string().when("type", {
      is: MEDIA_AND_NEWS_TYPES.NEWS_ANNOUNCEMENT,
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
    content: Joi.string().when("type", {
      is: MEDIA_AND_NEWS_TYPES.PRESS_RELEASE,
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
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

module.exports = createMediaAndNewsValidationSchema;
