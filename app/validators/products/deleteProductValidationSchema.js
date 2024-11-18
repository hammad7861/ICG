const Joi = require("joi");

const deleteProductValidationSchema = {
  params: Joi.object({
    productId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteProductValidationSchema;
