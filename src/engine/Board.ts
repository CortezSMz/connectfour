import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export interface Disc {
  x: number;
  z: number;
  id: number;
  model?: GLTF;
  color: "RED" | "YELLOW";
  dropped: boolean;
}

export interface GridSlot {
  x: number;
  z: number;
  disc?: Disc;
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

    for (let i = 0; i < 6; i++) {
      Board[i] = [];
      for (let j = 0; j < 7; j++) {
        Board[i].push({
          x: j * discDiameter - offsetX,
          z: i * discDiameter - offsetY,
        });
      }
    }
    return Board;
  }

  public isValidLocation(x: number, disc: Disc) {
    for (let i = this.grid.length - 1; i >= 0; i--) {
      const col = this.grid[this.grid.length - 1].findIndex((c) => c.x === x);

      if (!this.grid[i][col].disc) {
        this.grid[i][col].disc = disc;
        return this.grid[i][col];
      }
    }

    return null;
  }

  public getDiscById(id: number): Disc | undefined {
    return this.discs.find((disc) => disc.id === id);
  }
}
