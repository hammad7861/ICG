const Joi = require("joi");

const getProductsValidationSchema = {
  query: Joi.object({
    page: Joi.number().integer().positive().required(),
    limit: Joi.number().integer().positive().required(),
  }),
};

module.exports = getProductsValidationSchema;
