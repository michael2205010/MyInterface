import { createApp } from "vue";
import "./assets/css/main.css";
import App from "./App.vue";
import router from "./router";


if (import.meta.env.MODE != "development") import("../mocks/mockData");

createApp(App).use(router).mount("#app");
