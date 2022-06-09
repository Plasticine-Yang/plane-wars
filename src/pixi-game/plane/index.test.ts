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
});
