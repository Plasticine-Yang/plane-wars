import { getElementRelativePositionInContainer } from '@/utils';
import { Application } from 'pixi.js';
import { APP_BACKGROUND_COLOR } from '../constants';
import { collisionDetect } from '../logic';
import {
  createEnemeyPlane,
  createPlane,
  EnemyPlane,
  EnemyPlaneOptions,
  Plane,
  PLANE_HEIGHT,
  PLANE_WIDTH,
} from '../plane';

const APP_WIDTH = document.documentElement.clientWidth;
const APP_HEIGHT = document.documentElement.clientHeight;

export const pixiApp = new Application({
  width: APP_WIDTH,
  height: APP_HEIGHT,
  backgroundColor: APP_BACKGROUND_COLOR,
});

const initPlane = () => {
  const { x, y } = getElementRelativePositionInContainer(
    APP_WIDTH,
    APP_HEIGHT,
    PLANE_WIDTH,
    PLANE_HEIGHT,
    0.5,
    0.8
  );
  const plane = createPlane(x, y);

  return plane;
};

/**
 * @description 初始化创建敌军飞机
 * @param count 创建几架敌军飞机
 */
const initEnemyPlane = (count = 3, options?: EnemyPlaneOptions) => {
  const enemyPlanes: EnemyPlane[] = [];

  for (let i = 0; i < count; i++) {
    enemyPlanes.push(createEnemeyPlane(Math.random() * APP_WIDTH, 0, options));
  }

  return enemyPlanes;
};

const initGame = () => {
  // 初始化飞机的渲染逻辑
  const plane = initPlane();

  // 初始化创建 3 架敌军飞机
  const enemyPlanes = initEnemyPlane();

  return {
    plane,
    enemyPlanes,
  };
};

/**
 * @description 控制初始化飞机后飞机的行为
 * @param plane 响应式飞机对象
 */
const startPlane = (plane: Plane) => {
  plane.startFire();

  pixiApp.ticker.add(() => {
    plane.moveBullets();
  });
};

/**
 * @description 敌军飞机相关的逻辑
 * @param enemyPlanes 敌军飞机数组
 */
const startEnemyPlane = (enemyPlanes: EnemyPlane[]) => {
  setInterval(() => {
    // 每次随机生成不超过五架飞机
    const newEnemyPlanes = initEnemyPlane(Math.floor(Math.random() * 5));
    enemyPlanes.push(...newEnemyPlanes);
  }, 2000);

  // 遍历所有敌军飞机让它们移动
  pixiApp.ticker.add(() => {
    enemyPlanes.forEach((enemyPlane) => {
      enemyPlane.move();
    });
  });
};

/**
 * @description 在帧循环中检测我方飞机的子弹是否和敌军飞机碰撞
 * @param plane 我方飞机
 * @param enemyPlanes 敌军飞机
 */
const startCollisionDetect = (plane: Plane, enemyPlanes: EnemyPlane[]) => {
  pixiApp.ticker.add(() => {
    plane.bullets.forEach((bullet, bIndex) => {
      enemyPlanes.forEach((enemyPlane, eIndex) => {
        const isCollided = collisionDetect(bullet, enemyPlane);
        if (isCollided) {
          // 发生碰撞则将子弹和飞机删除
          plane.bullets.splice(bIndex, 1);
          enemyPlanes.splice(eIndex, 1);
        }
      });
    });
  });
};

document.body.appendChild(pixiApp.view);

export { initGame, startPlane, startEnemyPlane, startCollisionDetect };
