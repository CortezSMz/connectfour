const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/connectfour/" : "/",
  pwa: {
    name: "Connect Four - Alexandre Cortez",
    themeColor: "#4e79f4",
  },
});
