<template>
  <v-footer color="primary" app>
    <v-row justify="center" align="center" class="footer-row text-center">
      <!-- Github link -->
      <v-col cols="2">
        <v-btn
          light
          color="primary"
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

      <!-- Title -->
      <v-col cols="8">
        <strong>Connect Four</strong>
      </v-col>

      <!-- Controls -->
      <v-col cols="2">
        <v-bottom-sheet
          v-model="controls"
          :persistent="finished"
          eager
          overlay-opacity="0.05"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn light fab small v-bind="attrs" v-on="on">
              <font-awesome-icon
                icon="gear"
                size="2x"
                :style="{ color: 'var(--v-primary-base)' }"
              />
            </v-btn>
          </template>

          <!-- Finish alert -->
          <v-alert v-model="finished" class="text-center" color="primary">
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

          <!-- Sheet -->
          <v-sheet class="footer-sheet" color="primary">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <h3>Connect Four</h3>
                <p>
                  The objective of the game is to be the first to form a
                  horizontal, vertical, or diagonal line of four discs.
                </p>
              </v-col>
              <v-col cols="10" lg="6">
                <v-slider
                  :readonly="finished"
                  v-model="$parent.manager.minimax.depth"
                  color="secondary"
                  label="Difficult"
                  min="1"
                  max="8"
                  thumb-label="always"
                  persistent-hint
                  :hint="difficultHint"
                >
                  <template v-slot:thumb-label="{ value }">
                    <span class="v-btn">{{ value }}</span>
                  </template>
                </v-slider>
              </v-col>
              <v-col cols="auto">
                <v-btn class="footer-btn" rounded light @click="resetCamera"
                  >Reset camera</v-btn
                >
                <v-btn class="footer-btn" rounded light @click="resetGame"
                  >Reset game</v-btn
                >
              </v-col>
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
    difficultHint() {
      const difficult: Record<number, string> = {
        1: "passive",
        2: "passive",
        3: "easy",
        4: "easy",
        5: "moderate",
        6: "moderate",
        7: "tougher",
        8: "tougher",
      };
      return `AI will test ${
        this.$parent.manager.minimax.depth
      } plays in the future. (${
        difficult[this.$parent.manager.minimax.depth]
      })`;
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
