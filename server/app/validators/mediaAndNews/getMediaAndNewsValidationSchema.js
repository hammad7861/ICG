const Joi = require("joi");

const getMediaAndNewsValidationSchema = {
  params: Joi.object({
    mediaAndNewsId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = getMediaAndNewsValidationSchema;
