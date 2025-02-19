import * as Yup from "yup";

const bulkAddProductValidationSchema = Yup.object().shape({
	Products: Yup.string().required("Product name is required"),

	"Chemical Name": Yup.string().nullable().notRequired(),

	"Chemical Formula": Yup.string().nullable().notRequired(),

	"Molecular Weight": Yup.string().nullable().notRequired(),

	"CAS No.": Yup.string().nullable().notRequired(),

	Description: Yup.string().nullable().notRequired(),

	category: Yup.string().nullable().notRequired(),

	"Product Form": Yup.string().nullable().notRequired(),
});

export default bulkAddProductValidationSchema;
