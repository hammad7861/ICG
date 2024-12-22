const Joi = require("joi");

const bulkCreateProductValidationSchema = {
  body: Joi.object({
    products: Joi.array()
      .items(
        Joi.object({
          casNo: Joi.string().required(),
          chemicalName: Joi.string().required(),
          name: Joi.string().required(),
          categoryName: Joi.string().required(),
          molecularFormula: Joi.string().required(),
          details: Joi.string().required(),
          published: Joi.boolean().required(),
        })
      )
      .required(),
  }),
};

module.exports = bulkCreateProductValidationSchema;
