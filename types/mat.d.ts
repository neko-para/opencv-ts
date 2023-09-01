import type { EmscriptenEmbindInstance } from './emscripten'
import type { Range, Rect, Scalar, Size } from './misc'

export declare class Mat extends EmscriptenEmbindInstance<Mat> {
  constructor()
  constructor(mat: Mat)
  constructor(size: Size, type: number)
  constructor(rows: number, cols: number, type: number, scalar?: _Scalar)

  static zeros(rows: number, cols: number, type: number): Mat
  static zeros(size: Size, type: number): Mat
  static ones(rows: number, cols: number, type: number): Mat
  static ones(size: Size, type: number): Mat
  static eye(rows: number, cols: number, type: number): Mat
  static eye(size: Size, type: number): Mat

  channels(): number
  col(x: number): Mat
  colRange(begincol: number, endcol: number): Mat
  colRange(range: Range): Mat
  convertTo(dst: Mat, type: number, alpha?: number, beta?: number): void
  copyTo(dst: Mat, mask?: Mat): void
  create(rows: number, cols: number, type: number): void
  create(size: Size, type: number): void
  depth(): number
  diag(d?: number): Mat
  dot(v: unknown): number
  elemSize(): number
  elemSize1(): number
  empty(): boolean
  inv(method: number): void
  isContinuous(): boolean
  mul(mat: Mat, scale: number): Mat
  roi(rect: Rect): Mat
  row(x: number): Mat
  rowRange(beginrow: number, endrow: number): Mat
  rowRange(range: Range): Mat
  setTo(scalar: _Scalar, mask?: Mat): void
  size(): Size
  t(): Mat
  total(): number
  type(): number

  ucharPtr(rows: number, cols?: number): Uint8Array
  ucharAt(offset: number): number
  ucharAt(rows: number, cols: number): number
  charPtr(rows: number, cols?: number): Int8Array
  charAt(offset: number): number
  charAt(rows: number, cols: number): number
  ushortPtr(rows: number, cols?: number): Uint16Array
  ushortAt(offset: number): number
  ushortAt(rows: number, cols: number): number
  shortPtr(rows: number, cols?: number): Int16Array
  shortAt(offset: number): number
  shortAt(rows: number, cols: number): number
  intPtr(rows: number, cols?: number): Int32Array
  intAt(offset: number): number
  intAt(rows: number, cols: number): number
  floatPtr(rows: number, cols?: number): Float32Array
  floatAt(offset: number): number
  floatAt(rows: number, cols: number): number
  doublePtr(rows: number, cols?: number): Float64Array
  doubleAt(offset: number): number
  doubleAt(rows: number, cols: number): number

  cols: number
  rows: number
  data: Uint8Array
  data8S: Int8Array
  data16S: Int16Array
  data16U: Uint16Array
  data32F: Float32Array
  data32S: Int32Array
  data64F: Float64Array
  matSize: number[]
  step: [number, number]
}
