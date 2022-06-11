import { v4 as uuid4 } from 'uuid';

export const BULLET_WIDTH = 30;
export const BULLET_HEIGHT = 72;

export interface BulletOptions {
  width?: number;
  height?: number;
  speed?: number;
}

export class Bullet {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;

  constructor(x: number, y: number, options?: BulletOptions) {
    this.id = uuid4();
    this.x = x;
    this.y = y;
    this.width = options?.width ?? BULLET_WIDTH;
    this.height = options?.height ?? BULLET_HEIGHT;
    this.speed = options?.speed ?? 10;
  }

  move() {
    this.y -= this.speed;
  }
}
