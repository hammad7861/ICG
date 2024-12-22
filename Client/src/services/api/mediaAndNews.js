import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
const getFormDataForMediaAndNews = (data) => {
  const formData = new FormData();
  if (data?.bannerImage?.originFileObj) {
    formData.append("bannerImage", data?.bannerImage?.originFileObj);
  }

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("publishDate", data.publishDate);
  formData.append("type", data.type);
  if (data.type === "Press Release") {
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("contact", data.contact);
  } else {
    formData.append("content", data.content);
  }
  return formData;
};

export const getMediaAndNewss = async (page, limit) => {
  try {
    const response = await newRequest.get(
      Endpoints.getMediaAndNewss(page, limit)
    );

    return response?.data?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const addMediaAndNews = async (data) => {
  try {
    const formData = getFormDataForMediaAndNews(data);
    const response = await newRequest.post(
      Endpoints.addMediaAndNews(),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const editMediaAndNews = async (data, id) => {
  try {
    const formData = getFormDataForMediaAndNews(data);

    const response = await newRequest.put(
      Endpoints.editMediaAndNews(id),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const viewMediaAndNews = async (mediaAndNewsId) => {
  try {
    const response = await newRequest.get(
      Endpoints.viewMediaAndNews(mediaAndNewsId)
    );

    return response?.data?.data?.mediaAndNews;
  } catch (error) {
    next(formatError(error));
  }
};

export const deleteMediaAndNews = async (mediaAndNewsId) => {
  try {
    const response = await newRequest.delete(
      Endpoints.viewMediaAndNews(mediaAndNewsId)
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
