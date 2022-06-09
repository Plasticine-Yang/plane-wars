import { Plane, PlaneOptions } from './Plane';

export * from './Plane';

export const createPlane = (x: number, y: number, options?: PlaneOptions) => {
  return new Plane(x, y, options);
};
