import axios from "axios";

export default function () {
  axios.defaults.baseURL = "http://127.0.0.1:8000";
}
