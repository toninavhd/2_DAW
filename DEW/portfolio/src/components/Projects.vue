<template>
  <div class="p-4">
    <h1>Proyectos</h1>
    <div v-for="project in cvData.projects" :key="project.name" class="project-card p-3 mb-3 border rounded">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <p><strong>Tecnologías:</strong> {{ project.technologies.join(', ') }}</p>
      <a :href="project.link" target="_blank">Ver proyecto</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import cvData from '@/data/cv.json'
</script>

<style scoped>
.project-card {
  background-color: #f8f9fa;
}
</style>
