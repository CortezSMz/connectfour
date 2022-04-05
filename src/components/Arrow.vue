<template>
  <div :id="`${this.col}-arrow`" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import Board from "./Board.vue";
import gsap from "gsap";

@Component<Arrow>({
  mounted() {
    return this.$parent.gltfLoader.load(
      `assets/arrow.glb`,
      (glbArrow: GLTF) => {
        this.model = glbArrow;

        this.model.scene.position.set(this.col, 0, -0.1);

        this.$parent.$parent.raycaster.on(
          "pointermove",
          this.model.scene,
          this.moveCurrentDisc
        );

        this.$parent.$parent.raycaster.on("pointerdown", this.model.scene, () =>
          this.$parent.manager.drop(this.col)
        );

        gsap
          .timeline({
            repeat: -1,
            yoyo: true,
            defaults: { duration: 0.25 },
          })
          .to(this.model.scene.position, {
            z: -0.105,
          });

        this.addToBoard(this.model);
      }
    );
  },

  destroyed() {
    this.$parent.model.scene.remove(this.model.scene);

    this.$parent.$parent.raycaster.off(
      "pointermove",
      this.model.scene,
      this.moveCurrentDisc
    );
  },
})
export default class Arrow extends Vue {
  @Prop({ type: Number, required: true })
  private col!: number;

  private model!: GLTF;

  $parent!: Board;

  private addToBoard(model: GLTF) {
    const boardModel = this.$parent.model;
    if (boardModel) {
      boardModel.scene.add(this.model.scene);
    } else {
      setTimeout(() => {
        this.addToBoard(model);
      }, 250);
    }
  }

  private moveCurrentDisc() {
    try {
      const currentDisc = this.$parent.manager.getCurrentDisc();
      if (currentDisc && currentDisc.model)
        gsap.to(currentDisc.model.scene.position, {
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
