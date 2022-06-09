import { Bullet } from '../bullet';

export const PLANE_WIDTH = 110;
export const PLANE_HEIGHT = 98;

interface PlaneOptions {
  bulletMoveSpeed: number;
}

export class Plane {
  x: number;
  y: number;
  speed: number;
  bullets: Bullet[] = [];
  bulletMoveSpeed: number;

  constructor(x: number, y: number, speed: number, options?: PlaneOptions) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.bulletMoveSpeed = options?.bulletMoveSpeed ?? 5;
  }

  moveUp() {
    this.y -= this.speed;
  }

  moveDown() {
    this.y += this.speed;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  /**
   * @description 开火 -- 生成子弹
   */
  fire() {
    this.bullets.push(new Bullet(this.x, this.y, this.bulletMoveSpeed));
  }

  /**
   * @description 让子弹移动
   */
  moveBullets() {
    this.bullets.forEach((bullet) => bullet.move());
  }
}
