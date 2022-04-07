<template>
  <v-footer color="primary lighten-1" app>
    <v-row justify="center" align="center" class="footer-row text-center">
      <v-col cols="2">
        <v-btn
          light
          color="primary lighten-1"
          fab
          small
          href="https://github.com/CortezSMz/connectfour"
          target="blank"
        >
          <font-awesome-icon
            icon="fa-brands fa-github"
            transform="grow-2"
            size="3x"
            style="color: white"
          />
        </v-btn>
      </v-col>

      <v-col cols="8">
        <strong>Connect Four</strong>
      </v-col>

      <v-col cols="2">
        <v-bottom-sheet
          v-model="controls"
          :persistent="finished"
          eager
          overlay-opacity="0.05"
        >
          <v-alert
            v-model="finished"
            class="text-center"
            color="primary lighten-1"
          >
            {{
              this.$parent.manager.state.finished
                ? this.$parent.manager.state.winner === "TIE"
                  ? "it's a tie!"
                  : this.$parent.manager.state.winner === "RED"
                  ? "🔴 won the game!"
                  : "🟡 won the game!"
                : ""
            }}
          </v-alert>
          <template v-slot:activator="{ on, attrs }">
            <v-btn light fab small v-bind="attrs" v-on="on">
              <font-awesome-icon
                icon="gear"
                size="2x"
                :style="{ color: 'var(--v-primary-lighten1)' }"
              />
            </v-btn>
          </template>
          <v-sheet class="footer-sheet" color="primary lighten-1">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <h3>Connect Four</h3>
                <p>
                  The objective of the game is to be the first to form a
                  horizontal, vertical, or diagonal line of four discs.
                </p>
              </v-col>
              <v-col cols="12">
                <v-btn class="footer-btn" rounded light @click="resetCamera"
                  >Reset camera</v-btn
                >
                <v-btn class="footer-btn" rounded light @click="resetGame"
                  >Reset game</v-btn
                >
              </v-col>
            </v-row>
            <v-row align="center" justify="center">
              <v-btn class="footer-btn" small light fab v-if="false">
                <font-awesome-icon
                  icon="save"
                  size="2x"
                  :style="{ color: 'var(--v-primary-lighten1)' }"
                />
              </v-btn>
            </v-row>
          </v-sheet>
        </v-bottom-sheet>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Board from "./Board.vue";
import "@/styles/controls.scss";
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";

@Component<Controls>({
  computed: {
    finished() {
      return this.$parent.manager.state.finished;
    },
  },
})
export default class Controls extends Vue {
  controls = false;

  $parent!: Board;

  @Watch("finished")
  setControls() {
    this.controls = true;
  }

  resetCamera() {
    this.$parent.$parent.resetCamera();

    if (!this.$parent.manager.state.finished) this.close();
  }

  resetGame() {
    this.$parent.resetGame();

    this.close();
  }

  save() {
    this.close();
  }

  close() {
    this.$data.controls = !this.$data.controls;
  }
}
</script>
