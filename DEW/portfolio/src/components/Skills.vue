<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Habilidades</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="skill in cvData.skills"
          :key="skill"
          class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-center font-medium hover:bg-blue-200 transition-colors"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cvData from '@/data/cv.json'
</script>
