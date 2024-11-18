const Joi = require("joi");

const publishProductValidationSchema = {
  body: Joi.object({
    published: Joi.boolean().required(),
  }),
};

module.exports = publishProductValidationSchema;
