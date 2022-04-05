<template>
  <div class="scene" ref="scene">
    <Board :size="16" />
  </div>
</template>

<script lang="ts">
import "@/styles/scene.scss";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Component, Vue } from "vue-property-decorator";
import Raycaster from "@/engine/Raycaster";
import Board from "./Board.vue";

@Component<Scene>({
  components: {
    Board,
  },
  mounted() {
    this.camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.raycaster = new Raycaster(this.camera, this.renderer.domElement);

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener("resize", this.onWindowResize, false);

    this.scene.add(
      this.ambientLight,
      this.hemisphereLight,
      this.directionalLight
    );

    this.scene.background = new THREE.Color(0xf2f2f2);

    this.directionalLight.position.set(150, 350, 350);

    (this.$refs.scene as Element).appendChild(this.renderer.domElement);

    this.controls.enablePan = false;
    this.camera.position.z = 0.25;

    this.animate();
  },
})
export default class Scene extends Vue {
  private hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x000000, 0.9);

  private directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);

  private ambientLight = new THREE.AmbientLight(0xdc8874, 0.5);

  private renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

  private camera!: THREE.PerspectiveCamera;

  private controls!: OrbitControls;

  raycaster!: Raycaster;

  scene = new THREE.Scene();

  private animate() {
    this.renderer.render(this.scene, this.camera);
    this.controls.update();
    requestAnimationFrame(this.animate);
  }

  private onWindowResize() {
    if (!this.camera || !this.renderer) return;
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
</script>
