<template>
  <div class="p-4">
    <h1>Experiencia</h1>
    <div v-for="exp in cvData.experience" :key="exp.position" class="experience-card p-3 mb-3 border rounded">
      <h3>{{ exp.position }}</h3>
      <p><strong>Empresa:</strong> {{ exp.company }}</p>
      <p><strong>Periodo:</strong> {{ exp.period }}</p>
      <p>{{ exp.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import cvData from '@/data/cv.json'
</script>

<style scoped>
.experience-card {
  background-color: #f8f9fa;
}
</style>
