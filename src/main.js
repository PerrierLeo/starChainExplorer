import { createApp } from "vue";
import timeago from "vue-timeago3";

import "./index.css";
import App from "./App.vue";

createApp(App).use(timeago).mount("#app");
