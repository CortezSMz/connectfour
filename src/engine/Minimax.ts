import GameManager from "@/engine/GameManager";
import { GridSlot } from "@/engine/Board";

export class Minimax {
  private manager: GameManager;

  public depth: number;

  constructor(manager: GameManager) {
    this.manager = manager;

    this.depth = 5;
  }
  public getBestMove() {
    const [moves, bestScore] = this.getMoves();

    const bestMoves = (moves as number[][]).filter(
      (move) => move[1] === bestScore
    );

    if (bestMoves.length === 1) return bestMoves[0];

    const randomBestMove =
      bestMoves[Math.floor(Math.random() * bestMoves.length)];

    return randomBestMove;
  }

  public getMoves(depth: number = this.depth) {
    const board = [...this.manager.board.grid];

    const moves = this.minimax(board, depth, -Infinity, Infinity, true);

    return moves;
  }

  private minimax(
    board: GridSlot[][],
    depth: number,
    alpha: number,
    beta: number,
    playing: boolean
  ): (number | number[][])[] {
    const res = this.manager.check(board);
    if (res.result != null || depth === 0) {
      if (res.result === "RED") return [[], -1];
      else if (res.result === "YELLOW") return [[], 1];
      return [[], 0];
    }

    if (playing) {
      const max: (number | number[][])[] = [[], alpha];
      const validMoves = this.manager.board.allValidLocations(board);

      for (const { row, col, x, z } of validMoves) {
        board[row][col].disc = {
          dropped: false,
          color: "YELLOW",
          id: -1,
          x,
          z,
        };
        const nextMove = this.minimax(board, depth - 1, alpha, beta, false);
        board[row][col].disc = null;
        (max[0] as (number | number[])[]).push([x, nextMove[1] as number]);
        if ((nextMove as number[])[1] > (max as number[])[1]) {
          max[1] = nextMove[1];
          alpha = nextMove[1] as number;
        }
        if ((alpha as number) >= (beta as number)) return max;
      }

      return max;
    } else {
      const min: (number | number[][])[] = [[], beta];
      const validMoves = this.manager.board.allValidLocations(board);

      for (const { row, col, x, z } of validMoves) {
        board[row][col].disc = {
          dropped: false,
          color: "RED",
          id: -1,
          x,
          z,
        };
        const nextMove = this.minimax(board, depth - 1, alpha, beta, true);
        board[row][col].disc = null;
        (min[0] as (number | number[])[]).push([x, nextMove[1] as number]);
        if ((nextMove as number[])[1] < (min as number[])[1]) {
          min[1] = nextMove[1];
          beta = nextMove[1] as number;
        }
      }

      return min;
    }
  }
}
