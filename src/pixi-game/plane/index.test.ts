import { describe, expect, it } from 'vitest';
import { Plane } from './Plane';

describe('Plane', () => {
  const { x, y, speed } = <Plane>{
    x: 20,
    y: 20,
    speed: 10,
  };

  const createPlane = () => new Plane(x, y, speed);

  it('moveUp', () => {
    const plane = createPlane();
    plane.moveUp();
    expect(plane.y).toBe(10);
  });

  it('moveDown', () => {
    const plane = createPlane();
    plane.moveDown();
    expect(plane.y).toBe(30);
  });

  it('moveLeft', () => {
    const plane = createPlane();
    plane.moveLeft();
    expect(plane.x).toBe(10);
  });

  it('moveRight', () => {
    const plane = createPlane();
    plane.moveRight();
    expect(plane.x).toBe(30);
  });

  it('fire', () => {
    const plane = createPlane();
    plane.fire();
    expect(plane.bullets.length).toBe(1);
  });

  it('moveBullets', () => {
    const plane = createPlane();

    // 开 10 炮 -- 生成 10 个子弹
    for (let i = 0; i < 10; i++) plane.fire();

    // 让子弹动起来
    plane.moveBullets();

    for (const bullet of plane.bullets) {
      // 子弹如果有移动的话 y 坐标肯定不会和飞机的初始 y 坐标一样
      expect(bullet.y).not.toBe(plane.y);
    }
  });
});
