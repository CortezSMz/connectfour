<template>
  <div>
    <Arrow
      v-for="col of this.manager.board.grid[0].filter((c) => !c.filled)"
      :key="col.x"
      :col="col.x"
    />
    <Disc
      v-for="disc in this.manager.board.discs.slice(0, 42)"
      :key="disc.id"
      :x="disc.x"
      :z="disc.z"
      :id="disc.id"
      :color="disc.color"
      :dropped="disc.dropped"
    />

    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import BoardManager from "@/engine/GameManager";
import Scene from "./Scene.vue";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Arrow from "./Arrow.vue";
import Footer from "./Footer.vue";
import Disc from "./Disc.vue";

gsap.registerPlugin(MotionPathPlugin);

@Component<Board>({
  components: {
    Arrow,
    Disc,
    Footer,
  },

  mounted() {
    this.generateBoard();
  },

  destroyed() {
    this.$parent.scene.remove(this.model.scene);
  },
})
export default class Board extends Vue {
  gltfLoader = new GLTFLoader();

  manager = new BoardManager();

  model!: GLTF;

  disc!: GLTF;

  $parent!: Scene;

  private generateBoard() {
    this.$nextTick(() => {
      this.gltfLoader.load("assets/board.glb", (model: GLTF) => {
        this.model = model;

        this.resetBoardPosition();

        this.$parent.scene.add(model.scene);
      });
    });
  }

  public dropDisc() {
    gsap.to(this.disc.scene.position, {
      ease: "bounce",
      z: 0.0725,
    });
  }

  public resetBoardPosition() {
    this.model.scene.rotateX(Math.PI / 2);
    this.model.scene.rotateY(0);
  }

  public resetGame() {
    this.manager.resetGame();
  }
}
</script>
