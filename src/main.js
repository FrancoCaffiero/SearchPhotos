import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "@/assets/css/tailwind.css";
import Clipboard from "v-clipboard";

Vue.use(Clipboard);

Vue.config.productionTip = false;

new Vue({
  store,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
