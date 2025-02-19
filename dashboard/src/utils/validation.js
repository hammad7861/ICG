import * as Yup from "yup";

const bulkAddProductValidationSchema = Yup.object().shape({
	Products: Yup.string().required("Product name is required"),

	"Chemical Name": Yup.string().nullable(),

	"Chemical Formula": Yup.string().nullable(),

	"Molecular Weight": Yup.string().nullable(),

	"CAS No.": Yup.string().nullable(),

	Description: Yup.string().nullable(),

	category: Yup.string().nullable(),

	"Product Form": Yup.string().nullable(),
});

export default bulkAddProductValidationSchema;
