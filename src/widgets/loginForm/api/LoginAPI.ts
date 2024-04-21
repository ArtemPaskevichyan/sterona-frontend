import type { SignInModel } from "../lib/types";
import axios from "axios";

export const signinRequest = (model: SignInModel) => {
  return axios.post("/auth/jwt/create", model);
};
