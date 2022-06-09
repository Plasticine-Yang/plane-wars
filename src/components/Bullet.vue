<script setup lang="ts">
import bulletImg from '@/assets/bullets/player-bullet.png';

defineProps<{ x: number; y: number }>();
</script>

<template>
  <Container>
    <Sprite :texture="bulletImg" :x="x" :y="y" />
  </Container>
</template>
