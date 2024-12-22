const Joi = require("joi");

const deleteEventValidationSchema = {
  params: Joi.object({
    eventId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteEventValidationSchema;
