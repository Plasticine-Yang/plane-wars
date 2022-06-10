import { getElementRelativePositionInContainer } from '@/utils';
import { Bullet, BULLET_HEIGHT, BULLET_WIDTH } from '../bullet';

export const PLANE_WIDTH = 110;
export const PLANE_HEIGHT = 98;

export interface PlaneOptions {
  speed?: number;
  bulletMoveSpeed?: number;
  /** 开炮的频率 每 fireFreq 毫秒就开 1 炮 */
  fireFreq?: number;
}

export class Plane {
  x: number;
  y: number;
  speed: number;
  bullets: Bullet[] = [];
  bulletMoveSpeed: number;
  fireFreq: number;
  private fireTimer?: number;

  constructor(x: number, y: number, options?: PlaneOptions) {
    this.x = x;
    this.y = y;
    this.speed = options?.speed ?? 10;
    this.bulletMoveSpeed = options?.bulletMoveSpeed ?? 5;
    this.fireFreq = options?.fireFreq ?? 300;
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
    const { x: offsetX, y: offsetY } = getElementRelativePositionInContainer(
      PLANE_WIDTH,
      PLANE_HEIGHT,
      BULLET_WIDTH,
      BULLET_HEIGHT,
      0.5,
      0
    );
    this.bullets.push(
      new Bullet(this.x + offsetX, this.y + offsetY, this.bulletMoveSpeed)
    );
  }

  /**
   * @description 让子弹移动
   */
  moveBullets() {
    this.bullets.forEach((bullet) => bullet.move());
  }

  /**
   * @description 开启发射子弹
   */
  startFire() {
    this.fireTimer = setInterval(() => {
      this.fire();
    }, this.fireFreq) as unknown as number;
  }

  /**
   * @description 停止发射子弹
   */
  stopFire() {
    clearInterval(this.fireTimer);
  }
}
