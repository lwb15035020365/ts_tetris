import { Square } from "./Square";
import { Point, Shape } from "./types";


export class SquareGroup {
  private _squares: readonly Square[];

  public get squares() {
    return this._squares;
  }

  public get shape() {
    return this._shape;
  }

  public get centerPoint() {
    return this._centerPoint;
  }

  public set centerPoint(v: Point) {
    this._centerPoint = v;
    this.setSquarePoints();
  }

  // 根据中心点坐标，以及形状，设置每一个小方块的坐标
  private setSquarePoints() {
    this._shape.forEach((p, i) => {
      this._squares[i].point = {
        x: this._centerPoint.x + p.x,
        y: this._centerPoint.y + p.y
      }
    })
  }

  constructor(
    private _shape: Shape,
    private _centerPoint: Point,
    private _color: string
  ) {
    const arr: Square[] = [];
    this._shape.forEach(p => {
      const sq = new Square();
      sq.color = this._color;
      sq.point = {
        x: this._centerPoint.x + p.x,
        y: this._centerPoint.y + p.y
      }
      arr.push(sq);
    })
    this._squares = arr;
  }

  protected isClock = true;

  afterRotateShape(): Shape {
    if (this.isClock) {
      return this._shape.map(p => {
        const newP: Point = {
          x: -p.y,
          y: p.x
        }
        return newP;
      })
    } else {
      return this._shape.map(p => {
        const newP: Point = {
          x: p.y,
          y: -p.x
        }
        return newP;
      })
    }
  }

  rotate() {
    const newShape = this.afterRotateShape();
    this._shape = newShape;
    this.setSquarePoints();
  }
}