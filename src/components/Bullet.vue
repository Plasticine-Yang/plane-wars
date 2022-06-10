<script setup lang="ts">
import bulletImg from '@/assets/bullets/player-bullet.png';
import { Bullet } from '@/pixi-game/bullet';
import { onMounted } from 'vue';

const { bullet } = defineProps<{ bullet: Bullet }>();
</script>

<template>
  <Container>
    <Sprite :texture="bulletImg" :x="bullet.x" :y="bullet.y" />
  </Container>
</template>
