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

        this.$parent.spawnObject(this.model);
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
  async isDropped() {
    if (this.model) {
      this.drop();
    } else {
      this.isDropped();
    }
  }

  private async drop() {
    await gsap.fromTo(
      this.model.scene.position,
      { x: this.x },
      {
        x: this.x,
        z: this.z,
        duration: 0.5,
        ease: "bounce",
      }
    );

    this.$parent.manager.spawnNext(this.id, this.color);
  }
}
</script>

<style></style>
