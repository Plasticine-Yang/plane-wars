import { describe, expect, it, vi } from 'vitest';
import { EnemyPlane } from './EnemyPlane';
import { Plane } from './Plane';

describe('Plane', () => {
  const { x, y, speed } = <Plane>{
    x: 20,
    y: 20,
    speed: 10,
  };

  const createPlane = () => new Plane(x, y);

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

  it('startFire/stopFire', () => {
    const plane = createPlane();
    // 测试发射 testCount 次子弹后 飞机的子弹数
    const testCount = 10;

    // 启用模拟计时器
    vi.useFakeTimers();

    // 让飞机一直开炮
    plane.startFire();

    // 比如飞机开炮频率是每 300ms 开一炮 那么过了 10 * 300 === 3000ms 后，子弹数应为 10 个
    setTimeout(() => {
      // 停止开炮开始检验子弹数
      plane.stopFire();

      // 计时器结束后需要调用它模拟真实的计时器停止行为
      vi.useRealTimers();

      // 断言判断子弹数
      expect(plane.bullets.length).toBe(testCount);
    }, plane.fireFreq * testCount);

    // 调用每个被创建的计时器
    vi.runAllTimers();
  });
});

describe('EnemyPlane', () => {
  it('move', () => {
    // create a simple enemyPlane
    const enemyPlane = new EnemyPlane(50, 0, {
      height: 100,
      width: 100,
      speed: 5,
    });

    enemyPlane.move();

    expect(enemyPlane.y).toBe(5);
  });
});
