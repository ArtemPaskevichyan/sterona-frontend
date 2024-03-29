import { type SignUpModel } from "../lib/types";
import axios from "axios";

export const signupRequest = (model: SignUpModel) => {
  return axios.post("/auth/users/", model);
};
