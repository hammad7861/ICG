import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
const getFormDataForArticle = (data) => {
  const formData = new FormData();
  if (data?.attachment?.file) {
    formData.append("articleAttachment", data?.attachment?.file?.originFileObj);
  }
  if (data?.bannerImage?.originFileObj) {
    formData.append("bannerImage", data?.bannerImage?.originFileObj);
  }
  formData.append("title", data.title);
  formData.append("publishDate", data.publishDate);
  formData.append("author", data.author);
  formData.append("articleCategory", data.articleCategory);
  formData.append("contentCategory", data.category);
  formData.append("tags", data.tags);
  formData.append("summary", data.summary);
  formData.append("description", data.description);
  return formData;
};

export const getArticles = async (page, limit) => {
  try {
    const response = await newRequest.get(Endpoints.getArticles(page, limit));

    return response?.data?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const viewArticle = async (articleId) => {
  try {
    const response = await newRequest.get(Endpoints.viewArticle(articleId));

    return response?.data?.data?.article;
  } catch (error) {
    next(formatError(error));
  }
};
export const addArticle = async (data) => {
  try {
    const formData = getFormDataForArticle(data);

    const response = await newRequest.post(
      Endpoints.addArticle(),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const editArticle = async (data, id) => {
  try {
    const formData = getFormDataForArticle(data);

    const response = await newRequest.put(
      Endpoints.editArticle(id),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const deleteArticle = async (articleId) => {
  try {
    const response = await newRequest.delete(Endpoints.viewArticle(articleId));
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
