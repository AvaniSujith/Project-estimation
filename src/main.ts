import { createApp } from "vue";
import { createVuetify } from "vuetify";
import { createPinia } from "pinia";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);
app.use(pinia);
app.mount("#app");
