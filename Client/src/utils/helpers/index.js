import { message } from "antd";
import { AxiosError } from "axios";

export function formatError(err) {
  console.log(err);

  let errorMessage = "Something went wrong.";
  if (err instanceof AxiosError) {
    const errorData = err?.response?.data;
    errorMessage =
      errorData?.code !== 500 ? errorData?.message : "Something went wrong.";
  }
  return errorMessage;
}

export function next(error) {
  const errorMessage = error || "Somethingwentwrong";
  message.error(errorMessage);
  throw new Error(errorMessage);
}
