<template>
  <div class="p-4">
    <h1>{{ cvData.about.name }}</h1>
    <h2>{{ cvData.about.title }}</h2>
    <p>{{ cvData.about.description }}</p>
  </div>
</template>

<script setup lang="ts">
import cvData from '@/data/cv.json'
</script>

<style scoped>
</style>
