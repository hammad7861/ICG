const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    cas_no: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    chemical_name: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category_name: {
      type: String,
      required: true,
      trim: true,
    },
    industry_name: {
      type: String,
      required: true,
      trim: true,
    },
    molecular_formula: {
      type: String,
      required: true,
      trim: true,
    },
    molecular_weight: {
      type: String,
      required: true,
      trim: true,
    },
    form: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: String,
      required: true,
    },
    MSDS: {
      type: String,
      required: true,
    },
    TDS: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
