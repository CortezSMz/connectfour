const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Connect Four - Alexandre Cortez",
    themeColor: "#4e79f4",
  },
});
