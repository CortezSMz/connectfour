<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "./Scene.vue";

@Component<Board>({
  mounted() {
    this.generateBoard();
  },

  destroyed() {
    this.$parent.scene.remove(this.object3D.scene);
  },
})
export default class Board extends Vue {
  private gltfLoader = new GLTFLoader();

  object3D!: GLTF;

  $parent!: Scene;

  private generateBoard() {
    this.$nextTick(() => {
      this.gltfLoader.load("assets/board.glb", (gltf: GLTF) => {
        this.object3D = gltf;

        gltf.scene.scale.set(20, 20, 20);

        gltf.scene.rotateX(Math.PI / 2);

        this.$parent.scene.add(gltf.scene);
      });
    });
  }
}
</script>
