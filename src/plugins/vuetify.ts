import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        primary: "#2361d7",
        secondary: "#FF0000",
      },
    },
  },
  icons: {
    iconfont: "fa",
  },
});
