import * as Yup from "yup";

const VALID_CATEGORIES = [
  "Antioxidants",
  "HALS",
  "UV Absorber",
  "Optical Brightener",
  "Flame Retardants",
  "Pigments and Dyes",
  "Antiblocks",
  "Polymers Processing",
  "Additives",
  "Polymers and Resins",
  "Masterbatches",
  "Plasticizers",
];

const casNumberRegex = /^\d{2,7}-\d{2}-\d$/;

const bulkAddProductValidationSchema = Yup.object().shape({
  Products: Yup.string()
    .required("Product name is required")
    .max(255, "Product name cannot exceed 255 characters"),

  "Chemical name": Yup.string()
    .required("Chemical name is required")
    .max(255, "Chemical name cannot exceed 255 characters"),

  "Chemical Formula": Yup.string()
    .nullable()
    .max(100, "Chemical formula cannot exceed 100 characters"),

  "CAS No.": Yup.string()
    .required("CAS number is required")
    .matches(casNumberRegex, "CAS number format is invalid (e.g., 12345-67-8)"),

  Description: Yup.string()
    .nullable()
    .max(500, "Description cannot exceed 500 characters"),

  category: Yup.string()
    .required("Category is required")
    .oneOf(VALID_CATEGORIES, "Invalid category"),
});

export default bulkAddProductValidationSchema;
