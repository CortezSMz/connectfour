import { Board } from "@/engine/Board";
import { Disc } from "./Board";

export default class GameManager {
  public board: Board;

  public dropping: boolean;

  constructor() {
    this.board = new Board();

    this.dropping = false;
  }

  drop(x: number) {
    if (this.dropping) return;

    const isValid = this.board.isValidLocation(x);

    if (isValid) {
      this.dropping = true;

      const currentDisc = this.getCurrentDisc();
      if (!currentDisc) return;
      currentDisc.x = isValid.x;
      currentDisc.z = isValid.z;
      currentDisc.dropped = true;
    }
  }

  getCurrentDisc(): Disc | undefined {
    return this.board.discs.find((disc: Disc) => !disc.dropped);
  }
}
