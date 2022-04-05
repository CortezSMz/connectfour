import { Board } from "@/engine/Board";
import { Disc } from "./Board";

export default class GameManager {
  public board: Board;

  constructor() {
    this.board = new Board();
  }

  drop(x: number) {
    const isValid = this.board.isValidLocation(x);
    if (isValid) {
      const currentDisc = this.getCurrentDisc();
      if (!currentDisc) return;
      currentDisc.x = isValid.x;
      currentDisc.z = isValid.z;
      currentDisc.dropped = true;

      this.board.spawnNext(currentDisc);
    }
  }

  getCurrentDisc(): Disc | undefined {
    return this.board.discs.find((disc: Disc) => !disc.dropped);
  }
}
