const Joi = require("joi");

const deleteJobValidationSchema = {
  params: Joi.object({
    jobId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteJobValidationSchema;
