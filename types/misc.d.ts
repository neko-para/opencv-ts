export declare let onRuntimeInitialized: () => void
export declare function getBuildInformation(): string

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
