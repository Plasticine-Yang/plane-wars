import { getElementRelativePositionInContainer } from '@/utils';
import { Application } from 'pixi.js';
import { APP_BACKGROUND_COLOR } from '../constants';
import { createPlane, Plane, PLANE_HEIGHT, PLANE_WIDTH } from '../plane';

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

const initGame = () => {
  // 初始化飞机的渲染逻辑
  const plane = initPlane();

  return {
    plane,
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

document.body.appendChild(pixiApp.view);

export { initGame, startPlane };
