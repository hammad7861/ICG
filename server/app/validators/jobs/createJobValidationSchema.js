const Joi = require("joi");

const createJobValidationSchema = {
  body: Joi.object({
    title: Joi.string().required(),
    department: Joi.string().required(),
    location: Joi.string().required(),
    employmentType: Joi.string().required(),
    description: Joi.string().required(),
    scheduled: Joi.boolean().required(),
    scheduledDate: Joi.date().when("scheduled", {
      is: true,
      then: Joi.required(),
      otherwise: Joi.forbidden(),
    }),
    published: Joi.boolean().required(),
  }),
};

module.exports = createJobValidationSchema;
