import { createApp } from "vue";
import { createVuetify } from "vuetify";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDateInput } from "vuetify/labs/VDateInput";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);
const vuetify = createVuetify({
  components: {
    ...components,
    VDateInput,
  },
  directives,
});

app.use(vuetify);
app.mount("#app");