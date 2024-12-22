const Joi = require("joi");

const publishProductValidationSchema = {
  params: Joi.object({
    productId: Joi.string().alphanum().length(24).required(),
  }),
  body: Joi.object({
    published: Joi.boolean().required(),
  }),
};

module.exports = publishProductValidationSchema;
