export default class Click {
  /**
   *
   */
  constructor();
  constructor(timestamp: Date, x: number, y: number);
  constructor(timestamp?: Date, x?: number, y?: number) {
    this.timestamp = timestamp ? timestamp : new Date(0);
    this.x = x ? x : 0;
    this.y = y ? y : 0;
  }
  timestamp: Date;
  x: number;
  y: number;

  getProps() {
    Object.keys(this);
  }
}
