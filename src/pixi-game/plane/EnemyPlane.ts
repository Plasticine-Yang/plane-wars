// 使用默认的敌军飞机图片宽高
export const ENEMY_PLANE_WIDTH = 133;
export const ENEMY_PLANE_HEIGHT = 93;

export interface EnemyPlaneOptions {
  speed: number;
  width: number;
  height: number;
}

export class EnemyPlane {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;

  constructor(x: number, y: number, options?: EnemyPlaneOptions) {
    this.x = x;
    this.y = y;
    this.width = options?.width ?? ENEMY_PLANE_WIDTH;
    this.height = options?.height ?? ENEMY_PLANE_HEIGHT;
    this.speed = options?.speed ?? 5;
  }

  move() {
    this.y += this.speed;
  }
}
