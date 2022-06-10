<script setup lang="ts">
import Plane from '@/components/Plane.vue';
import Bullet from '@/components/Bullet.vue';
import { provide, reactive } from 'vue';
import { initGame, startPlane, startEnemyPlane } from '@/pixi-game';
import EnemyPlane from './components/EnemyPlane.vue';

const APP_WIDTH = document.documentElement.clientWidth;
const APP_HEIGHT = document.documentElement.clientHeight;

provide('APP_WIDTH', APP_WIDTH);
provide('APP_HEIGHT', APP_HEIGHT);

const { plane: rawPlane, enemyPlanes: rawEnemyPlanes } = initGame();
const plane = reactive(rawPlane);
const enemyPlanes = reactive(rawEnemyPlanes);

startPlane(plane);
startEnemyPlane(enemyPlanes);
</script>

<template>
  <Container>
    <Plane :plane="plane" />
    <Bullet v-for="bullet in plane.bullets" :key="bullet.id" :bullet="bullet" />
    <EnemyPlane
      v-for="enemyPlane in enemyPlanes"
      :key="enemyPlane.id"
      :enemy-plane="enemyPlane"
    />
  </Container>
</template>
