import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
	headers: {
		"Content-Type": "multipart/form-data",
	},
};
const getFormDataForUser = (data) => {
	const formData = new FormData();
	if (data?.bannerImage?.originFileObj) {
		formData.append("profileImage", data?.profileImage?.originFileObj);
	}
	formData.append("name", data.name);
	formData.append("email", data.email);
	formData.append("password", data.password);
	return formData;
};

export const addUser = async (data, publish) => {
	try {
		const formData = getFormDataForUser(data, publish);
		const response = await newRequest.post(
			Endpoints.addUser(),
			formData,
			headers
		);
		return response?.data;
	} catch (error) {
		next(formatError(error));
	}
};

export const editUser = async (data, id) => {
	try {
		const formData = getFormDataForUser(data);

		const response = await newRequest.put(
			Endpoints.editUser(id),
			formData,
			headers
		);
		return response?.data;
	} catch (error) {
		next(formatError(error));
	}
};

export const viewUser = async (userId) => {
	try {
		const response = await newRequest.get(Endpoints.viewUser(userId));

		return response?.data?.data?.user;
	} catch (error) {
		next(formatError(error));
	}
};
export const getUsers = async (page, limit) => {
	try {
		const response = await newRequest.get(Endpoints.getUsers(page, limit));
		return response?.data?.data;
	} catch (error) {
		next(formatError(error));
	}
};

export const deleteUser = async (userId) => {
	try {
		const response = await newRequest.delete(Endpoints.viewUser(userId));
		return response?.data;
	} catch (error) {
		next(formatError(error));
	}
};
