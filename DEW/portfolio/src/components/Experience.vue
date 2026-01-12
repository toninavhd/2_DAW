<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Experiencia</h1>
      <div class="space-y-6">
        <div
          v-for="exp in cvData.experience"
          :key="exp.position"
          class="border-l-4 border-blue-500 pl-6 pb-6"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ exp.position }}</h3>
          <p class="text-blue-600 font-medium mb-1">{{ exp.company }}</p>
          <p class="text-gray-500 text-sm mb-3">{{ exp.period }}</p>
          <p class="text-gray-700">{{ exp.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cvData from '@/data/cv.json'
</script>
