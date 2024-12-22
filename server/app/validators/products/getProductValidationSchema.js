const Joi = require("joi");

const getProductValidationSchema = {
  params: Joi.object({
    productId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getProductValidationSchema;
