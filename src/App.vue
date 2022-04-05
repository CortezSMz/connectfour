<template>
  <v-app>
    <Scene />
  </v-app>
</template>

<script lang="ts">
import "@/styles/app.scss";

import { Component, Vue } from "vue-property-decorator";
import Scene from "./components/Scene.vue";

@Component({
  components: {
    Scene,
  },
})
export default class app extends Vue {}
</script>
