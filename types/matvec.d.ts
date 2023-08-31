import { EmscriptenEmbindInstance } from './emscripten'
import { Mat } from './mat'

export declare class MatVector extends EmscriptenEmbindInstance<MatVector> {
  constructor()

  push_back(mat: Mat): void
  get(idx: number): Mat
  set(idx: number, mat: Mat): void
  resize(size: number, fill: Mat): void
  size(): number
}
