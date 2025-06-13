<template>
  <div v-if="assets">
    <div v-if="!this.manager.state.finished">
      <Arrow
        v-for="col of this.manager.board.grid[0].filter((c) => !c.disc)"
        :key="col.x"
        :col="col.x"
        :currentColor="currentColor"
      />
    </div>

    <Disc
      v-for="disc in this.manager.board.discs.slice(0, 42)"
      :key="disc.id"
      :x="disc.x"
      :z="disc.z"
      :id="disc.id"
      :color="disc.color"
      :dropped="disc.dropped"
    />

    <Controls />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Scene from "./Scene.vue";
import Arrow from "./Arrow.vue";
import Controls from "./Controls.vue";
import Disc from "./Disc.vue";
import GameManager from "@/engine/GameManager";
import { Object3D, Event } from "three";

@Component<Board>({
  data() {
    return {
      assets: true,
    };
  },

  components: {
    Arrow,
    Disc,
    Controls,
  },

  mounted() {
    this.$nextTick(() => {
      this.gltfLoader.load("assets/board.glb", (model: GLTF) => {
        const object3D = model.scene.children[0];

        object3D.removeFromParent();

        this.model = object3D;

        this.$parent.spawnObject(this.model);
      });
    });
  },

  destroyed() {
    this.$parent.scene.remove(this.model);
  },

  computed: {
    currentColor() {
      const currentDisc = this.manager.getCurrentDisc();
      if (currentDisc) return currentDisc.color;
      else return "NONE";
    },
  },
})
export default class Board extends Vue {
  gltfLoader = new GLTFLoader();

  manager = new GameManager();

  assets!: boolean;

  private model!: Object3D<Event>;

  $parent!: Scene;

  public resetGame() {
    this.manager = new GameManager();

    this.$parent.raycaster.removeAll();

    this.assets = false;

    this.$nextTick(() => (this.assets = true));
  }
}
</script>
