<script setup lang="ts">
import Plane from '@/components/Plane.vue';
import Bullet from '@/components/Bullet.vue';
import { provide, reactive } from 'vue';
import { initGame, startPlane } from '@/pixi-game';

const APP_WIDTH = document.documentElement.clientWidth;
const APP_HEIGHT = document.documentElement.clientHeight;

provide('APP_WIDTH', APP_WIDTH);
provide('APP_HEIGHT', APP_HEIGHT);

const { plane: rawPlane } = initGame();
const plane = reactive(rawPlane);

startPlane(plane);
</script>

<template>
  <Container>
    <Plane :plane="plane" />
    <Bullet v-for="bullet in plane.bullets" :key="bullet.id" :bullet="bullet" />
  </Container>
</template>
