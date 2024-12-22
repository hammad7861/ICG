import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
const getFormDataForBrochure = (data, publish) => {
  const formData = new FormData();
  if (data?.brochureAttachment?.file?.originFileObj) {
    formData.append(
      "brochureAttachment",
      data?.brochureAttachment?.file?.originFileObj
    );
  }
  formData.append("title", data.title);
  formData.append("author", data.author);
  formData.append("category", data.category);
  formData.append("publishDate", data.publishDate);
  formData.append("published", publish);
  return formData;
};

export const addBrochure = async (data, publish) => {
  try {
    const formData = getFormDataForBrochure(data, publish);
    const response = await newRequest.post(
      Endpoints.addBrochure(),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const editBrochure = async (data, publish, id) => {
  try {
    const formData = getFormDataForBrochure(data, publish);

    const response = await newRequest.put(
      Endpoints.editBrochure(id),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const viewBrochure = async (brochureId) => {
  try {
    const response = await newRequest.get(Endpoints.viewBrochure(brochureId));

    return response?.data?.data?.brochure;
  } catch (error) {
    next(formatError(error));
  }
};
export const getBrochures = async (page, limit) => {
  try {
    const response = await newRequest.get(Endpoints.getBrochures(page, limit));
    return response?.data?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const deleteBrochure = async (brochureId) => {
  try {
    const response = await newRequest.delete(
      Endpoints.viewBrochure(brochureId)
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
