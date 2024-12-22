import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
const getFormDataForBlog = (data, publish) => {
  const formData = new FormData();
  if (data?.featuredImage?.originFileObj) {
    formData.append("featuredImage", data?.featuredImage?.file?.originFileObj);
  }
  if (data?.bannerImage?.originFileObj) {
    formData.append("bannerImage", data?.banner?.originFileObj);
  }
  formData.append("title", data.title);
  formData.append("author", data.author);
  formData.append("publishDate", data.publishDate);
  formData.append("blogCategory", data.blogCategory);
  formData.append("tags", data.tags);
  formData.append("contents", data.blogContent);
  formData.append("sharing", data.sharing);
  formData.append("comments", data.comments);
  formData.append("published", publish);
  return formData;
};

export const getBlogs = async (page, limit) => {
  try {
    const response = await newRequest.get(Endpoints.getBlogs(page, limit));

    return response?.data?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const viewBlog = async (blogId) => {
  try {
    const response = await newRequest.get(Endpoints.viewBlog(blogId));

    return response?.data?.data?.blog;
  } catch (error) {
    next(formatError(error));
  }
};
export const addBlog = async (data, publish) => {
  try {
    const formData = getFormDataForBlog(data, publish);
    const response = await newRequest.post(
      Endpoints.addBlog(),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const editBlog = async (data, publish, id) => {
  try {
    const formData = getFormDataForBlog(data, publish);

    const response = await newRequest.put(
      Endpoints.editBlog(id),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const deleteBlog = async (blogId) => {
  try {
    const response = await newRequest.delete(Endpoints.viewBlog(blogId));
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
