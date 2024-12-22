const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    cas_no: {
      type: String,
      required: true,
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
      required: false,
      trim: true,
    },
    molecular_formula: {
      type: String,
      required: true,
      trim: true,
    },
    molecular_weight: {
      type: String,
      required: false,
      trim: true,
    },
    form: {
      type: String,
      required: false,
      trim: true,
    },
    details: {
      type: String,
      required: true,
    },
    MSDS: {
      type: String,
      required: false,
    },
    TDS: {
      type: String,
      required: false,
    },
    banner: {
      type: String,
      required: false,
    },
    published: {
      type: Boolean,
      default: false,
    },
    archived: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.index({ cas_no: 1, archived: 1, deletedAt: 1 }, { unique: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
