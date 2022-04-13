/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Minimax } from "@/engine/Minimax";
import { Board, Disc, GridSlot } from "@/engine/Board";

export default class GameManager {
  public board: Board;

  public minimax: Minimax;

  public dropping: boolean;

  public state: {
    finished: boolean;
    winner?: "TIE" | "RED" | "YELLOW";
  };

  constructor() {
    this.board = new Board();

    this.minimax = new Minimax(this);

    if (this.board.discs.length === 0) this.spawnNext(-1, "YELLOW");

    this.dropping = false;

    this.state = {
      finished: false,
    };
  }

  drop(x: number) {
    if (this.dropping) return;

    const currentDisc = this.getCurrentDisc();

    if (!currentDisc) return;

    const isValid = this.board.isValidLocation(
      this.board.grid,
      this.board.getColFromXCoord(x)
    );

    if (isValid) {
      this.dropping = true;

      this.board.grid[isValid.row][isValid.col].disc = currentDisc;

      currentDisc.x = isValid.x;
      currentDisc.z = isValid.z;
      currentDisc.dropped = true;
    }
  }

  spawnNext(id: number, color: "RED" | "YELLOW") {
    const isFinished = this.check(this.board.grid);

    if (isFinished.result)
      return (this.state = {
        finished: true,
        winner: isFinished.result === "TIE" ? "TIE" : isFinished.discs[0].color,
      });

    this.board.discs.push({
      id: id + 1,
      color: color === "RED" ? "YELLOW" : "RED",
      dropped: false,
      x: 0,
      z: -0.14,
    });

    if (color === "RED") {
      const move = this.minimax.getBestMove();

      this.dropping = false;

      setTimeout(() => {
        this.drop(move[0]);
      }, 100);
    }

    setTimeout(() => {
      this.dropping = false;
    }, 250);
  }

  check(board: GridSlot[][]): {
    result: "RED" | "YELLOW" | "TIE" | null;
    discs: Disc[];
  } {
    const rows = board.length;
    const cols = board[0].length;

    let empty = 0;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const disc = board[row][col].disc;

        if (!disc) continue;

        /* Check horizontal right */
        if (
          col < cols - 3 &&
          this.fourConnected(
            disc,
            board[row][col + 1].disc,
            board[row][col + 2].disc,
            board[row][col + 3].disc
          )
        ) {
          return {
            result: disc.color,
            discs: [
              disc,
              board[row][col + 1].disc!,
              board[row][col + 2].disc!,
              board[row][col + 3].disc!,
            ],
          };
        }

        // Check vertical down
        if (
          row < rows - 3 &&
          this.fourConnected(
            disc,
            board[row + 1][col].disc,
            board[row + 2][col].disc,
            board[row + 3][col].disc
          )
        ) {
          return {
            result: disc.color,
            discs: [
              disc,
              board[row + 1][col].disc!,
              board[row + 2][col].disc!,
              board[row + 3][col].disc!,
            ],
          };
        }

        // Check diagonal down right
        if (
          row < rows - 3 &&
          col < cols - 3 &&
          this.fourConnected(
            disc,
            board[row + 1][col + 1].disc,
            board[row + 2][col + 2].disc,
            board[row + 3][col + 3].disc
          )
        ) {
          return {
            result: disc.color,
            discs: [
              disc,
              board[row + 1][col + 1].disc!,
              board[row + 2][col + 2].disc!,
              board[row + 3][col + 3].disc!,
            ],
          };
        }

        // Check diagonal down left
        if (
          row < rows - 3 &&
          col > 2 &&
          this.fourConnected(
            disc,
            board[row + 1][col - 1].disc,
            board[row + 2][col - 2].disc,
            board[row + 3][col - 3].disc
          )
        ) {
          return {
            result: disc.color,
            discs: [
              disc,
              board[row + 1][col - 1].disc!,
              board[row + 2][col - 2].disc!,
              board[row + 3][col - 3].disc!,
            ],
          };
        }

        if (disc) empty++;
      }
    }

    /* Check for tie */
    if (empty === 42) return { result: "TIE", discs: [] };

    return { result: null, discs: [] };
  }

  fourConnected(
    a: Disc | null,
    b: Disc | null,
    c: Disc | null,
    d: Disc | null
  ) {
    return (
      !!a &&
      !!b &&
      !!c &&
      !!d &&
      a.color == b.color &&
      a.color == c.color &&
      a.color == d.color
    );
  }

  getCurrentDisc(): Disc | undefined {
    return this.board.discs.find((disc: Disc) => !disc.dropped);
  }
}
