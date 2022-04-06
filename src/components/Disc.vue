<template>
  <div v-if="false" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import Board from "./Board.vue";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

@Component<Disc>({
  mounted() {
    return this.$parent.gltfLoader.load(
      `assets/${this.color.toLowerCase()}-disc.glb`,
      (model: GLTF) => {
        this.model = model;

        const boardDisc = this.$parent.manager.board.getDiscById(this.id);

        if (boardDisc) boardDisc.model = this.model;

        this.model.scene.position.x = this.x;
        this.model.scene.position.z = this.z;

        this.addToBoard(this.model);
      }
    );
  },

  destroyed() {
    this.$parent.model.scene.remove(this.model.scene);
  },
})
export default class Disc extends Vue {
  @Prop({ type: String, required: true })
  private color!: "RED" | "YELLOW";

  @Prop({ type: Number, required: true })
  private id!: number;

  @Prop({ type: Number, required: true })
  private x!: number;

  @Prop({ type: Number, required: true })
  private z!: number;

  @Prop({ type: Boolean, required: true })
  private dropped!: boolean;

  private model!: GLTF;

  $parent!: Board;

  @Watch("dropped")
  isDropped() {
    this.drop();
  }

  private addToBoard(model: GLTF) {
    const boardModel = this.$parent.model;
    if (boardModel) {
      boardModel.scene.add(this.model.scene);
      gsap
        .timeline({ defaults: { ease: "elastic" } })
        .from(this.model.scene.scale, {
          x: 0,
          y: 0,
          z: 0,
        });
    } else {
      setTimeout(() => {
        this.addToBoard(model);
      }, 250);
    }
  }

  private drop() {
    gsap.fromTo(
      this.model.scene.position,
      { x: this.x },
      {
        x: this.x,
        z: this.z,
        duration: 0.5,
        ease: "bounce",
        onComplete: () => {
          setTimeout(() => {
            this.$parent.manager.board.spawnNext(this.id, this.color);
            this.$parent.manager.dropping = false;
          }, 250);
        },
      }
    );
  }
}
</script>

<style></style>
