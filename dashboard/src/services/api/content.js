import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
const getFormDataForContent = (data, published) => {
  const formData = new FormData();
  if (data?.bannerImage?.originFileObj) {
    formData.append("bannerImage", data?.bannerImage?.originFileObj);
  }
  formData.append("title", data.title);
  formData.append("publishDate", data.publishDate);
  formData.append("author", data.author);
  formData.append("type", data.type);
  formData.append("tags", data.tags);
  formData.append("summary", data.summary);
  formData.append("content", data.content);
  formData.append("published", published);

  return formData;
};

export const getContents = async (page, limit) => {
  try {
    const response = await newRequest.get(Endpoints.getContents(page, limit));

    return response?.data?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const viewContent = async (articleId) => {
  try {
    const response = await newRequest.get(Endpoints.viewContent(articleId));

    return response?.data?.data?.content;
  } catch (error) {
    next(formatError(error));
  }
};
export const addContent = async (data, published) => {
  try {
    console.log({ data });

    const formData = getFormDataForContent(data, published);

    console.log({ formData });

    const response = await newRequest.post(
      Endpoints.addContent(),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const editContent = async (data, id, published) => {
  try {
    const formData = getFormDataForContent(data, published);

    const response = await newRequest.put(
      Endpoints.editContent(id),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const deleteContent = async (articleId) => {
  try {
    const response = await newRequest.delete(Endpoints.viewContent(articleId));
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
