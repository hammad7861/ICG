const Joi = require("joi");
const { ALLOWED_MIME_TYPES } = require("../../constants");

const createEventValidationSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required().greater(Joi.ref("startDate")).messages({
      "date.greater": "endDate must be after startDate",
    }),
    status: Joi.string().required(),
    comments: Joi.string().required(),
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

module.exports = createEventValidationSchema;
