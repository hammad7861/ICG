const Joi = require("joi");

const getBlogsValidationSchema = {
  query: Joi.object({
    page: Joi.number().integer().positive().required(),
    limit: Joi.number().integer().positive().required(),
  }),
};

module.exports = getBlogsValidationSchema;
