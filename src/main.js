import { createApp } from "vue";
import timeago from "vue-timeago3";
import router from "./router/index";

import "./index.css";
import App from "./App.vue";

createApp(App).use(timeago).use(router).mount("#app");
