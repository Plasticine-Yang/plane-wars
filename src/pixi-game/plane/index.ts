import { EnemyPlane, EnemyPlaneOptions } from './EnemyPlane';
import { Plane, PlaneOptions } from './Plane';

export * from './Plane';
export * from './EnemyPlane';

export const createPlane = (x: number, y: number, options?: PlaneOptions) => {
  return new Plane(x, y, options);
};

export const createEnemeyPlane = (
  x: number,
  y: number,
  options?: EnemyPlaneOptions
) => {
  return new EnemyPlane(x, y, options);
};
