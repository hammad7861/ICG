const Joi = require("joi");

const getFilteredContentsValidationSchema = {
  query: Joi.object({
    page: Joi.number().integer().positive().required(),
    limit: Joi.number().integer().positive().required(),
    type: Joi.string().optional(),
    published: Joi.boolean().optional(),
  }),
};

module.exports = getFilteredContentsValidationSchema;
