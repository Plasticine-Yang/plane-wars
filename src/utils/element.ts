export const getElementHorizontalCenter = (elWidth: number) => elWidth / 2;

export const getElementVerticalCenter = (elHeight: number) => elHeight / 2;

/**
 * @description 获取元素居中的坐标
 * @param elWidth 元素宽度
 * @param elHeight 元素高度
 */
export const getElementCenter = (elWidth: number, elHeight: number) => {
  return {
    x: getElementHorizontalCenter(elWidth),
    y: getElementVerticalCenter(elHeight),
  };
};

/**
 * @description 获取元素在容器中的相对位置坐标
 * @param containerWidth 容器宽度
 * @param containerHeight 容器高度
 * @param elWidth 元素宽度
 * @param elHeight 元素高度
 * @param horizontalPosition 元素在容器中的水平方向上的位置 -- 百分比的方式描述
 * @param verticalPosition 元素在容器中的垂直方向上的位置 -- 百分比的方式描述
 */
export const getElementRelativePositionInContainer = (
  containerWidth: number,
  containerHeight: number,
  elWidth: number,
  elHeight: number,
  horizontalPosition: number,
  verticalPosition: number
) => {
  return {
    x:
      containerWidth * horizontalPosition - getElementHorizontalCenter(elWidth),
    y: containerHeight * verticalPosition - getElementVerticalCenter(elHeight),
  };
};

/**
 * @description 获取元素在容器中居中的坐标
 * @param containerWidth 容器宽度
 * @param containerHeight 容器高度
 * @param elWidth 元素宽度
 * @param elHeight 元素高度
 */
export const getElementCenterInContainer = (
  containerWidth: number,
  containerHeight: number,
  elWidth: number,
  elHeight: number
) => {
  return getElementRelativePositionInContainer(
    containerWidth,
    containerHeight,
    elWidth,
    elHeight,
    0.5,
    0.5
  );
};
