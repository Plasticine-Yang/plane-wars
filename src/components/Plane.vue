<script setup lang="ts">
import playerPlaneImg from '@/assets/plane/player-plane.png';
import { inject, onMounted, onUnmounted, reactive, toRefs } from 'vue';
import { Plane } from '@/pixi-game';
import { PLANE_WIDTH, PLANE_HEIGHT } from '@/pixi-game/constants';
import { getElementRelativePositionInContainer } from '@/utils';

const APP_WIDTH = inject<number>('APP_WIDTH')!;
const APP_HEIGHT = inject<number>('APP_HEIGHT')!;

defineProps({
  planeImg: {
    type: String,
    default: playerPlaneImg,
  },
});

// 飞机初始坐标 -- 水平方向在屏幕中间 垂直方向在屏幕从上往下 80% 处
const { x: planeInitX, y: planeInitY } = getElementRelativePositionInContainer(
  APP_WIDTH,
  APP_HEIGHT,
  PLANE_WIDTH,
  PLANE_HEIGHT,
  0.5,
  0.8
);

const plane = reactive(new Plane(planeInitX, planeInitY, 10));
const { x, y } = toRefs(plane);

/**
 * @description 处理飞机方向移动
 */
const handleKeydown = (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowUp':
    case 'KeyW':
      plane.moveUp();
      break;
    case 'ArrowDown':
    case 'KeyS':
      plane.moveDown();
      break;
    case 'ArrowLeft':
    case 'KeyA':
      plane.moveLeft();
      break;
    case 'ArrowRight':
    case 'KeyD':
      plane.moveRight();
      break;
  }
};

onMounted(() => {
  // 添加键盘按下事件监听器
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Container>
    <Sprite :texture="planeImg" :x="x" :y="y" />
  </Container>
</template>
