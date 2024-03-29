import "@/app/assets/styles/main.css";

import { createApp } from "vue";
import App from "../pages/main/App.vue";
import router from "./router";
import axiosConfig from "./lib/axiosConfig";

axiosConfig();
const app = createApp(App);

app.use(router);

app.mount("#app");
