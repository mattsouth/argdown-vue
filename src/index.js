import ArgdownMap from "./ArgdownMap.vue";
import "@argdown/web-components/dist/argdown-map.js";
import "@argdown/web-components/dist/argdown-map.css";

export default {
  install(Vue) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("argdown-map", ArgdownMap);
  }
};
