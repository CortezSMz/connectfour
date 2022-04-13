import { Object3D, Event } from "three";

export interface Disc {
  x: number;
  z: number;
  id: number;
  model?: Object3D<Event>;
  color: "RED" | "YELLOW";
  dropped: boolean;
}

export interface GridSlot {
  x: number;
  z: number;
  row: number;
  col: number;
  disc: Disc | null;
}

export class Board {
  public discs: Disc[] = [];

  public grid: GridSlot[][];

  constructor() {
    this.grid = this.createGrid();
  }

  private createGrid(): GridSlot[][] {
    const Board: GridSlot[][] = [];

    const discDiameter = 0.02822279930114746;
    const offsetX = 0.0847;
    const offsetY = 0.0679;

    for (let row = 0; row < 6; row++) {
      Board[row] = [];
      for (let col = 0; col < 7; col++) {
        Board[row].push({
          x: col * discDiameter - offsetX,
          z: row * discDiameter - offsetY,
          row,
          col,
          disc: null,
        });
      }
    }
    return Board;
  }

  public getColFromXCoord(x: number) {
    return this.grid[this.grid.length - 1].findIndex((c) => c.x === x);
  }

  public isValidLocation(board: GridSlot[][], col: number) {
    for (let i = board.length - 1; i >= 0; i--) {
      if (!board[i][col].disc) {
        return {
          ...board[i][col],
          col,
          row: i,
        };
      }
    }

    return null;
  }

  public allValidLocations(
    board: GridSlot[][],
    colOrder: number[] = [...Array(this.grid[0].length).keys()]
  ) {
    const validMoves: GridSlot[] = [];

    for (const col of colOrder) {
      const isValid = this.isValidLocation(board, col);
      if (isValid) validMoves.push(isValid);
    }

    return validMoves;
  }

  public getDiscById(id: number): Disc | undefined {
    return this.discs.find((disc) => disc.id === id);
  }
}
