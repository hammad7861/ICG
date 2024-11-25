const Joi = require("joi");

const getJobValidationSchema = {
  params: Joi.object({
    jobId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getJobValidationSchema;
