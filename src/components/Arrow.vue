<template>
  <div :id="`${this.$parent.manager.board.getColFromXCoord(this.col)}-arrow`" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { Object3D, Event } from "three";
import Board from "./Board.vue";
import gsap from "gsap";

@Component<Arrow>({
  mounted() {
    return this.$parent.gltfLoader.load(`assets/arrow.glb`, (model: GLTF) => {
      const object3D = model.scene.children[0];

      object3D.removeFromParent();

      this.model = object3D;

      this.model.position.set(this.col, 0, -0.1);

      this.$parent.$parent.raycaster.on("pointermove", this.model, () => {
        if (this.currentColor === "RED") this.moveCurrentDisc();
      });

      this.$parent.$parent.raycaster.on("pointerdown", this.model, () => {
        if (this.currentColor === "RED") this.$parent.manager.drop(this.col);
      });

      gsap
        .timeline({
          repeat: -1,
          yoyo: true,
          defaults: { duration: 0.25 },
        })
        .to(this.model.position, {
          z: -0.105,
        });

      this.$parent.$parent.spawnObject(this.model);
    });
  },

  destroyed() {
    this.$parent.$parent.scene.remove(this.model);

    this.$parent.$parent.raycaster.off("pointermove", this.model, () => {
      if (this.currentColor === "RED") this.moveCurrentDisc;
    });
  },
})
export default class Arrow extends Vue {
  @Prop({ type: Number, required: true })
  private col!: number;

  @Prop({ type: String, required: true })
  private currentColor!: "RED" | "YELLOW" | "NONE";

  private model!: Object3D<Event>;

  $parent!: Board;

  private moveCurrentDisc() {
    try {
      const currentDisc = this.$parent.manager.getCurrentDisc();
      if (currentDisc && currentDisc.model)
        gsap.to(currentDisc.model.position, {
          duration: 2,
          ease: "elastic",
          x: this.col,
        });
    } catch (error) {
      console.log(error);
    }
  }
}
</script>
