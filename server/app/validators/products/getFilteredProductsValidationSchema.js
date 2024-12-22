const Joi = require("joi");

const getFilteredProductsValidationSchema = {
  query: Joi.object({
    page: Joi.number().integer().positive().required(),
    limit: Joi.number().integer().positive().required(),
    industryName: Joi.string().optional(),
    published: Joi.boolean().optional(),
  }),
};

module.exports = getFilteredProductsValidationSchema;
