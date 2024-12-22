import axios from "axios";
import { Endpoints } from "../../constants/Endpoints/Endpoint";
import { formatError, next } from "../../utils/helpers";

export const signIn = async(Data)=>{
   try {

    const response = await axios.post(
      Endpoints.signIn(),Data
    );
    return response?.data;
  } catch (error) {
    next(formatError(error));
  }
}