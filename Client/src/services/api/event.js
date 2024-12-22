import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";
import newRequest from "../config/axiosConfig";

let headers = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};
const getFormDataForEvent = (data) => {
  const formData = new FormData();
  if (data?.bannerImage?.originFileObj) {
    formData.append("bannerImage", data?.bannerImage?.originFileObj);
  }

  formData.append("name", data.eventName);
  formData.append("description", data.eventDescription);
  formData.append("startDate", data.startDate);
  formData.append("endDate", data.endDate);
  formData.append("status", data.eventStatus);
  formData.append("comments", data.comments);
  return formData;
};

export const getEvents = async (page, limit) => {
  try {
    const response = await newRequest.get(Endpoints.getEvents(page, limit));

    return response?.data?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const addEvent = async (data, publish) => {
  try {
    const formData = getFormDataForEvent(data, publish);
    const response = await newRequest.post(
      Endpoints.addEvent(),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const editEvent = async (data, id) => {
  try {
    const formData = getFormDataForEvent(data);

    const response = await newRequest.put(
      Endpoints.editEvent(id),
      formData,
      headers
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};

export const viewEvent = async (eventId) => {
  try {
    const response = await newRequest.get(Endpoints.viewEvent(eventId));

    return response?.data?.data?.event;
  } catch (error) {
    next(formatError(error));
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await newRequest.delete(Endpoints.viewEvent(eventId));
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
};
