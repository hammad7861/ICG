import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
	headers: {
		"Content-Type": "multipart/form-data",
	},
};
const getFormDataForProduct = (data, publish) => {
	const formData = new FormData();
	if (data?.MSDS?.file) {
		formData.append("MSDS", data?.MSDS?.file?.originFileObj);
	}
	if (data?.TDS?.file) {
		formData.append("TDS", data?.TDS?.file?.originFileObj);
	}
	if (data?.bannerImage?.originFileObj) {
		formData.append("bannerImage", data?.bannerImage?.originFileObj);
	}
	formData.append("casNo", data.casNo);
	formData.append("categoryName", data.categoryName);
	formData.append("chemicalName", data.chemicalName);
	formData.append("details", data.details);
	formData.append("form", data.form);
	formData.append("industryName", data.industryName || ""); // Optional field
	formData.append("molecularFormula", data.molecularFormula);
	formData.append("molecularWeight", data.molecularWeight);
	formData.append("name", data.name);
	formData.append("published", publish);
	return formData;
};

export const addProduct = async (data, publish) => {
	try {
		const formData = getFormDataForProduct(data, publish);
		const response = await newRequest.post(
			Endpoints.addProduct(),
			formData,
			headers
		);
		return response?.data;
	} catch (error) {
		next(formatError(error));
	}
};

export const bulkAddProduct = async (data, publish) => {
	try {
		const bulkAddProductData = data.map((product) => {
			return {
				casNo: product["CAS No."],
				chemicalName: product["Chemical Name"],
				name: product.Products,
				categoryName: product.category,
				molecularFormula: product["Chemical Formula"],
				molecularWeight: product["Molecular Weight"],
				productForm: product["Product Form"],
				details: product.Description,
				published: publish,
			};
		});

		const response = await newRequest.post(
			Endpoints.bulkAddProduct(),
			{ products: bulkAddProductData },
			{
				"Content-Type": "application/json",
			}
		);
		return response?.data;
	} catch (error) {
		next(formatError(error));
	}
};

export const editProduct = async (data, publish, id) => {
	try {
		const formData = getFormDataForProduct(data, publish);

		const response = await newRequest.put(
			Endpoints.editProduct(id),
			formData,
			headers
		);
		return response?.data;
	} catch (error) {
		next(formatError(error));
	}
};

export const viewProduct = async (productId) => {
	try {
		const response = await newRequest.get(Endpoints.viewProduct(productId));

		return response?.data?.data?.product;
	} catch (error) {
		next(formatError(error));
	}
};
export const getProducts = async (page, limit) => {
	try {
		const response = await newRequest.get(Endpoints.getProducts(page, limit));
		return response?.data?.data;
	} catch (error) {
		next(formatError(error));
	}
};

export const deleteProduct = async (productId) => {
	try {
		const response = await newRequest.delete(Endpoints.viewProduct(productId));
		return response?.data;
	} catch (error) {
		next(formatError(error));
	}
};

export const publishProduct = async (Data) => {
	try {
		const response = await newRequest.put(Endpoints.publishProduct(Data.id), {
			published: Data.published,
		});
		return response?.data;
	} catch (error) {
		next(formatError(error));
	}
};
