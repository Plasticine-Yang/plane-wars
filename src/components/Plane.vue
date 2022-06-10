<script setup lang="ts">
import playerPlaneImg from '@/assets/plane/player-plane.png';
import { onMounted, onUnmounted, PropType } from 'vue';
import { Plane } from '@/pixi-game';

const { plane } = defineProps({
  planeImg: {
    type: String,
    default: playerPlaneImg,
  },
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
});

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
    <Sprite :texture="planeImg" :x="plane.x" :y="plane.y" />
  </Container>
</template>
