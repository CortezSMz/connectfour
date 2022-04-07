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
    const { moves, bestScore } = this.getMoves();

    const bestMoves = moves.filter((m) => m.score === bestScore);

    return bestMoves[(bestMoves.length * Math.random()) | 0];
  }

  private getMoves(depth: number = this.depth) {
    const board = [...this.manager.board.grid];
    let bestScore = -Infinity;
    const moves: { score: number; move: GridSlot }[] = [];

    const validMoves = this.manager.board.allValidLocations(board);

    for (const { row, col, x, z } of validMoves) {
      board[row][col].disc = {
        dropped: false,
        color: "YELLOW",
        id: -1,
        x,
        z,
      };

      const score = this.minimax(board, depth, false);

      board[row][col].disc = null;

      moves.push({ score, move: { row, col, x, z, disc: null } });

      if (score > bestScore) {
        bestScore = score;
      }
    }

    return { moves, bestScore };
  }

  private minimax(
    board: GridSlot[][],
    depth: number,
    playing: boolean
  ): number {
    const res = this.manager.check(board);
    if (res.result != null || depth === 0) {
      if (res.result === "RED") return -1;
      else if (res.result === "YELLOW") return 1;
      return 0;
    }

    if (playing) {
      let bestScore = -Infinity;
      const validMoves = this.manager.board.allValidLocations(board);
      for (const { row, col, x, z } of validMoves) {
        board[row][col].disc = {
          dropped: false,
          color: "YELLOW",
          id: -1,
          x,
          z,
        };
        const score = this.minimax(board, depth - 1, false);
        board[row][col].disc = null;
        if (score > bestScore) {
          bestScore = score;
        }
      }
      return bestScore;
    } else if (!playing) {
      let bestScore = Infinity;
      const validMoves = this.manager.board.allValidLocations(board);
      for (const { row, col, x, z } of validMoves) {
        board[row][col].disc = {
          dropped: false,
          color: "RED",
          id: -1,
          x,
          z,
        };
        const score = this.minimax(board, depth - 1, true);
        board[row][col].disc = null;
        if (score < bestScore) {
          bestScore = score;
        }
      }
      return bestScore;
    }

    return 0;
  }
}
