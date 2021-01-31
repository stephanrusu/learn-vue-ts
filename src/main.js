import Vue from "vue";
import frag from "vue-frag";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/filters";

Vue.config.productionTip = false;
Vue.directive("frag", frag);

import "./styles/tailwind.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
