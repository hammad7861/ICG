const Joi = require("joi");

const bulkCreateProductValidationSchema = {
  body: Joi.object({
    products: Joi.array()
      .items(
        Joi.object({
          casNo: Joi.string().optional().allow("", null),
          chemicalName: Joi.string().optional().allow("", null),
          name: Joi.string().required(),
          categoryName: Joi.string().optional().allow("", null),
          molecularFormula: Joi.string().optional().allow("", null),
          molecularWeight: Joi.string().optional().allow("", null),
          productForm: Joi.string().optional().allow("", null),
          details: Joi.string().optional().allow("", null),
          published: Joi.boolean().optional().allow("", null),
        })
      )
      .required(),
  }),
};

module.exports = bulkCreateProductValidationSchema;
