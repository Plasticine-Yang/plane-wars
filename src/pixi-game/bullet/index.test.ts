import { getElementCenterInContainer } from '@/utils';
import { describe, it, expect } from 'vitest';
import { BULLET_HEIGHT, BULLET_WIDTH } from '../constants';
import { Bullet } from './Bullet';

describe('Bullet', () => {
  const { x: bulletInitX, y: bulletInitY } = getElementCenterInContainer(
    100,
    100,
    BULLET_WIDTH,
    BULLET_HEIGHT
  );

  const createBullet = () => {
    return new Bullet(bulletInitX, bulletInitY, { speed: 5 });
  };
  it('move', () => {
    const bullet = createBullet();
    bullet.move();
    expect(bullet.y).toBe(bulletInitY - bullet.speed);
  });
});
