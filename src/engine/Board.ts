import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export interface Disc {
  x: number;
  z: number;
  id: number;
  model?: GLTF;
  color: "RED" | "YELLOW";
  dropped: boolean;
}

interface GridSlot {
  x: number;
  z: number;
  filled: boolean;
}

export class Board {
  public discs: Disc[] = [];

  public grid: GridSlot[][];

  constructor() {
    this.grid = this.createGrid();

    this.discs.push({
      id: 0,
      color: "RED",
      dropped: false,
      x: 0,
      z: 0,
    });
  }

  private createGrid(): GridSlot[][] {
    const Board: GridSlot[][] = [];

    const discDiameter = 0.02822279930114746;
    const offsetX = 0.0847;
    const offsetY = 0.0679;

    for (let i = 0; i < 6; i++) {
      Board[i] = [];
      for (let j = 0; j < 7; j++) {
        Board[i].push({
          x: j * discDiameter - offsetX,
          z: i * discDiameter - offsetY,
          filled: false,
        });
      }
    }
    return Board;
  }

  public isValidLocation(x: number) {
    // eslint-disable-next-line for-direction
    for (let i = this.grid.length - 1; i >= 0; i--) {
      const col = this.grid[this.grid.length - 1].findIndex((c) => c.x === x);

      if (!this.grid[i][col].filled) {
        this.grid[i][col].filled = true;
        return this.grid[i][col];
      }
    }

    return null;
  }

  public getDiscById(id: number): Disc | undefined {
    return this.discs.find((disc) => disc.id === id);
  }
}
