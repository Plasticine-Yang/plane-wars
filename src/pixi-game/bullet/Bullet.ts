import { v4 as uuid4 } from 'uuid';

export const BULLET_WIDTH = 30;
export const BULLET_HEIGHT = 72;

export class Bullet {
  id: string;
  x: number;
  y: number;
  speed: number;

  constructor(x: number, y: number, speed: number) {
    this.id = uuid4();
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  move() {
    this.y -= this.speed;
  }
}
