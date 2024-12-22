import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
  headers: {
    "Content-Type": "application/json",
  },
};
const getFormDataForJob = (data, publish) => {
  console.log({ data });

  return {
    title: data.title,
    department: data.department,
    location: data.location,
    employmentType: data.type,
    description: data.description,
    scheduled: data.scheduled,
    scheduledDate: data.scheduled_date,
    published: publish,
  };
};

export const getJobs = async (page, limit) => {
  try {
    const response = await newRequest.get(Endpoints.getJobs(page, limit));

    return response?.data?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const viewJob = async (jobId) => {
  try {
    const response = await newRequest.get(Endpoints.viewJob(jobId));

    return response?.data?.data?.job;
  } catch (error) {
    next(formatError(error));
  }
};
export const addJob = async (data, published) => {
  try {
    const formData = getFormDataForJob(data, published);
    const response = await newRequest.post(
      Endpoints.addJob(),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const editJob = async (data, publish, id) => {
  try {
    const formData = getFormDataForJob(data, publish);

    const response = await newRequest.put(
      Endpoints.editJob(id),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
export const deleteJob = async (jobId) => {
  try {
    const response = await newRequest.delete(Endpoints.viewJob(jobId));
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
