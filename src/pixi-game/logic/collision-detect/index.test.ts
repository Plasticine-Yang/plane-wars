import { expect, it, describe } from 'vitest';
import { Bullet } from '../../bullet';
import { EnemyPlane } from '../../plane';
import { collisionDetect } from '.';

describe('子弹与敌机碰撞 -- 上碰', () => {
  // 创建子弹
  const bullet = new Bullet(10, 40, { width: 30, height: 30, speed: 10 });
  // 创建敌机
  const enemyPlane = new EnemyPlane(0, 0, {
    width: 50,
    height: 50,
    speed: 5,
  });

  it('相交碰撞', () => {
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(true);
  });

  it('不相交不碰撞', () => {
    bullet.y = 60;
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(false);
  });

  it('边界相交碰撞', () => {
    bullet.y = 50;
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(true);
  });
});

describe('子弹与敌机碰撞 -- 下碰', () => {
  // 创建子弹
  const bullet = new Bullet(10, 0, { width: 30, height: 30, speed: 10 });
  // 创建敌机
  const enemyPlane = new EnemyPlane(0, 20, {
    width: 50,
    height: 50,
    speed: 5,
  });

  it('相交碰撞', () => {
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(true);
  });

  it('不相交不碰撞', () => {
    enemyPlane.y = 40;
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(false);
  });

  it('边界相交碰撞', () => {
    enemyPlane.y = 30;
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(true);
  });
});

describe('子弹与敌机碰撞 -- 左碰', () => {
  // 创建子弹
  const bullet = new Bullet(40, 10, { width: 30, height: 30, speed: 10 });
  // 创建敌机
  const enemyPlane = new EnemyPlane(0, 0, {
    width: 50,
    height: 50,
    speed: 5,
  });

  it('相交碰撞', () => {
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(true);
  });

  it('不相交不碰撞', () => {
    bullet.x = 60;
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(false);
  });

  it('边界相交碰撞', () => {
    bullet.x = 50;
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(true);
  });
});

describe('子弹与敌机碰撞 -- 右碰', () => {
  // 创建子弹
  const bullet = new Bullet(0, 10, { width: 30, height: 30, speed: 10 });
  // 创建敌机
  const enemyPlane = new EnemyPlane(20, 0, {
    width: 50,
    height: 50,
    speed: 5,
  });

  it('相交碰撞', () => {
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(true);
  });

  it('不相交不碰撞', () => {
    enemyPlane.x = 40;
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(false);
  });

  it('边界相交碰撞', () => {
    enemyPlane.x = 30;
    const isCollided = collisionDetect(bullet, enemyPlane);
    expect(isCollided).toBe(true);
  });
});
