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
    this.$nextTick(() => {
      this.$nextTick(() => {
        return this.$parent.gltfLoader.load(
          `assets/${this.color.toLowerCase()}-disc.glb`,
          (glbDisc: GLTF) => {
            this.model = glbDisc;

            const boardDisc = this.$parent.manager.board.getDiscById(this.id);

            if (boardDisc) boardDisc.model = this.model;

            this.model.scene.position.x = this.x;
            this.model.scene.position.z = this.z;

            this.$parent.glbBoard.scene.add(this.model.scene);
          }
        );
      });
    });
  },

  destroyed() {
    this.$parent.glbBoard.scene.remove(this.model.scene);
  },
})
export default class Disc extends Vue {
  @Prop({ type: String, required: true })
  private color!: string;

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

  private drop() {
    gsap
      .timeline({ defaults: { duration: 0.5 } })
      .to(this.model.scene.position, {
        duration: 0,
        ease: "elastic",
        x: this.x,
      })
      .to(this.model.scene.position, {
        x: this.x,
        z: this.z,
        duration: 0.5,
        ease: "bounce",
      });
  }
}
</script>

<style></style>
