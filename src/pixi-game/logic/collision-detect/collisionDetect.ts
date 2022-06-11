interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

const getBoundary = (rect: Rect) => {
  const top = rect.y;
  const bottom = rect.y + rect.height;
  const left = rect.x;
  const right = rect.x + rect.width;

  return {
    top,
    bottom,
    left,
    right,
  };
};

export const collisionDetect = (rect1: Rect, rect2: Rect) => {
  // 计算上下左右边界
  const {
    top: rect1Top,
    bottom: rect1Bottom,
    left: rect1Left,
    right: rect1Right,
  } = getBoundary(rect1);

  const {
    top: rect2Top,
    bottom: rect2Bottom,
    left: rect2Left,
    right: rect2Right,
  } = getBoundary(rect2);

  let topCollided = false,
    bottomCollided = false,
    leftCollided = false,
    rightCollided = false,
    horizontalWrapped = false,
    verticalWrapped = false;

  // 检测上碰
  if (rect1Top <= rect2Bottom && rect1Bottom > rect2Bottom) topCollided = true;
  // 检测下碰
  if (rect1Bottom >= rect2Top && rect1Top < rect2Top) bottomCollided = true;
  // 检测左碰
  if (rect1Left <= rect2Right && rect1Right > rect2Right) leftCollided = true;
  // 检测右碰
  if (rect1Right >= rect2Left && rect1Left < rect2Left) rightCollided = true;

  // 检测是否存在 rect1 在水平方向上包裹住 rect2 或 rect2 包裹住 rect1
  if (
    (rect1Left >= rect2Left && rect1Right <= rect2Right) ||
    (rect1Left <= rect2Left && rect1Right >= rect2Right)
  ) {
    horizontalWrapped = true;
  }

  // 检测是否存在 rect1 在垂直方向上包裹住 rect2 或 rect2 包裹住 rect1
  if (
    (rect1Top >= rect2Top && rect1Bottom <= rect2Bottom) ||
    (rect1Top <= rect2Top && rect1Bottom >= rect2Bottom)
  ) {
    verticalWrapped = true;
  }

  // 上/下 碰撞时 还需要在水平方向上有包裹才算碰撞
  if ((topCollided || bottomCollided) && horizontalWrapped) return true;

  // 左/右 碰撞时 还需要在垂直方向上有包裹才算碰撞
  if ((leftCollided || rightCollided) && verticalWrapped) return true;

  return false;
};
