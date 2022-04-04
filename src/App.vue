<template>
  <div>
    <Scene />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Scene from "./components/Scene.vue";

@Component({
  components: {
    Scene,
  },
})
export default class app extends Vue {}
</script>
