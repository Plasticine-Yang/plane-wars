<script setup lang="ts">
import { EnemyPlane } from '@/pixi-game/plane/EnemyPlane';
import enemyPlaneImg from '@/assets/plane/enemy-plane.png';

defineProps<{ enemyPlane: EnemyPlane }>();
</script>

<template>
  <Container>
    <Sprite :texture="enemyPlaneImg" :x="enemyPlane.x" :y="enemyPlane.y" />
  </Container>
</template>
