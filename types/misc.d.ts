import { Mat, MatVector } from '.'

export declare let onRuntimeInitialized: () => void
export declare function getBuildInformation(): string

export declare function matFromArray(rows: number, cols: number, type: number, array: ArrayLike<number>): Mat
export declare function matFromImageData(data: { width: number; height: number; data: Uint8Array }): Mat

export declare function bitwise_and(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void
export declare function bitwise_not(src: Mat, dst: Mat, mask?: Mat): void
export declare function bitwise_or(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void
export declare function bitwise_xor(src1: Mat, src2: Mat, dst: Mat, mask?: Mat): void
export declare function copyMakeBorder(
  src: Mat,
  dst: Mat,
  top: number,
  bottom: number,
  left: number,
  right: number,
  type: number,
  value?: Scalar
): void
export declare function fillPoly(
  src: Mat,
  pts: MatVector,
  color: Scalar,
  lineType?: number,
  shift?: number,
  offset?: Point
): void
export declare function findContours(
  src: Mat,
  contour: MatVector,
  hierarchy: Mat,
  mode: number,
  method: number,
  offset?: Point
): void
export declare function inRange(src: Mat, lowerb: Mat | Scalar, upperb: Mat | Scalar, dst: Mat): void
export declare function matchTemplate(src: Mat, templ: Mat, result: Mat, method: number, mask?: Mat): void
export declare function mean(src: Mat, mask?: Mat): Scalar
export declare function minAreaRect(pts: Mat): RotatedRect
export declare function minMaxLoc(
  src: Mat,
  mask?: Mat
): {
  minVal: number
  maxVal: number
  minLoc: { x: number; y: number } // not Point
  maxLoc: { x: number; y: number }
}
export declare function polylines(
  src: Mat,
  pts: MatVector,
  closed: boolean,
  color: Scalar,
  thickness?: number,
  lineType?: number,
  shift?: number
): void
export declare function resize(src: Mat, dst: Mat, size: Size, fx?: number, fy?: number, inter?: number): void
export declare function split(src: Mat, dst: MatVector): void
export declare function transpose(src: Mat, dst: Mat): void
export declare function threshold(src: Mat, dst: Mat, thresh: number, maxval: number, type: number): void

/**
 * Fixed size array with the length of 4
 */
export declare class Scalar extends Array<number> {
  '0': number
  '1': number
  '2': number
  '3': number
  length: 4

  constructor(v0?: number, v1?: number, v2?: number, v3?: number)

  static all(v: number): Scalar
}

export declare class Range {
  start: number
  end: number

  constructor(start?: number, end?: number)
}

export declare class Point {
  x: number
  y: number

  constructor(width?: number, height?: number)
}

export declare class Size {
  width: number
  height: number

  constructor(width?: number, height?: number)
}

export declare class Rect {
  x: number
  y: number
  width: number
  height: number

  constructor()
  constructor(point: Point, size: Size)
  constructor(x: number, y: number, width: number, height: number)
}

export declare class RotatedRect {
  center: { x: number; y: number }
  size: { width: number; height: number }
  angle: number

  constructor()
  constructor(center: Point, size: Size, angle: number)
}
