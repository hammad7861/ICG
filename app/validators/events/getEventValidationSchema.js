const Joi = require("joi");

const getEventValidationSchema = {
  params: Joi.object({
    eventId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getEventValidationSchema;
