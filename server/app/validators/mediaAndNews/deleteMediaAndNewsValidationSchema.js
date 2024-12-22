const Joi = require("joi");

const deleteMediaAndNewsValidationSchema = {
  params: Joi.object({
    mediaAndNewsId: Joi.string().alphanum().length(24).required(),
  }),
};

module.exports = deleteMediaAndNewsValidationSchema;
