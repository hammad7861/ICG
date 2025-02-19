import * as Yup from "yup";

const bulkAddProductValidationSchema = Yup.object().shape({
	Products: Yup.string()
		.required("Product name is required")
		.max(255, "Product name cannot exceed 255 characters"),

	"Chemical Name": Yup.string()
		.nullable()
		.max(255, "Chemical name cannot exceed 255 characters"),

	"Chemical Formula": Yup.string()
		.nullable()
		.max(100, "Chemical formula cannot exceed 100 characters"),

	"Molecular Weight": Yup.string()
		.nullable()
		.max(100, "Molecular weight cannot exceed 100 characters"),

	"CAS No.": Yup.string()
		.nullable()
		.max(100, "CAS number format is invalid (e.g., 12345-67-8)"),

	Description: Yup.string()
		.nullable()
		.max(500, "Description cannot exceed 500 characters"),

	category: Yup.string().nullable().max(100, "Invalid category"),

	"Product Form": Yup.string()
		.nullable()
		.max(500, "Product Form cannot exceed 500 characters"),
});

export default bulkAddProductValidationSchema;
