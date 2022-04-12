<template>
  <div :id="`${this.id}-${this.color.toLowerCase()}-disc`" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import Board from "./Board.vue";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Object3D, Event } from "three";

gsap.registerPlugin(MotionPathPlugin);

@Component<Disc>({
  mounted() {
    return this.$parent.gltfLoader.load(
      `assets/${this.color.toLowerCase()}-disc.glb`,
      (model: GLTF) => {
        const object3D = model.scene.children[0];

        object3D.removeFromParent();

        this.model = object3D;

        const boardDisc = this.$parent.manager.board.getDiscById(this.id);

        if (boardDisc) boardDisc.model = this.model;

        this.model.position.x = this.x;
        this.model.position.z = this.z;

        this.$parent.$parent.spawnObject(this.model);
      }
    );
  },

  destroyed() {
    this.$parent.$parent.scene.remove(this.model);
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

  private model!: Object3D<Event>;

  $parent!: Board;

  @Watch("dropped")
  async isDropped() {
    if (this.model) {
      this.drop();
    } else {
      await new Promise((s) => setTimeout(s, 100));

      this.isDropped();
    }
  }

  private async drop() {
    await gsap.fromTo(
      this.model.position,
      { x: this.x },
      {
        x: this.x,
        z: this.z,
        duration: 0.5,
        ease: "bounce",
      }
    );

    this.model.position.set(this.x, 0, this.z);

    this.$parent.manager.spawnNext(this.id, this.color);
  }
}
</script>

<style></style>
