const Joi = require("joi");
const { ALLOWED_MIME_TYPES } = require("../../constants");

const updateProductValidationSchema = {
  params: Joi.object({
    productId: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    casNo: Joi.string().required(),
    chemicalName: Joi.string().required(),
    name: Joi.string().required(),
    categoryName: Joi.string().required(),
    industryName: Joi.string().required(),
    molecularFormula: Joi.string().required(),
    molecularWeight: Joi.string().required(),
    form: Joi.string().required(),
    details: Joi.string().required(),
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
    MSDS: Joi.array()
      .items(
        Joi.object({
          originalname: Joi.string().required(),
          mimetype: Joi.string()
            .valid(...ALLOWED_MIME_TYPES.MSDS)
            .required(),
          fieldname: Joi.string().valid("MSDS").required(),
          encoding: Joi.string().required(),
          destination: Joi.string().required(),
          filename: Joi.string().required(),
          path: Joi.string().required(),
          size: Joi.number().required(),
        })
      )
      .optional()
      .label("MSDS"),
    TDS: Joi.array()
      .items(
        Joi.object({
          originalname: Joi.string().required(),
          mimetype: Joi.string()
            .valid(...ALLOWED_MIME_TYPES.TDS)
            .required(),
          fieldname: Joi.string().valid("TDS").required(),
          encoding: Joi.string().required(),
          destination: Joi.string().required(),
          filename: Joi.string().required(),
          path: Joi.string().required(),
          size: Joi.number().required(),
        })
      )
      .optional()
      .label("TDS"),
  }).optional(),
};

module.exports = updateProductValidationSchema;
