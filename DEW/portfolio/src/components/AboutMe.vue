<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white rounded-lg shadow-md p-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ cvData.about.name }}</h1>
      <h2 class="text-2xl text-gray-600 mb-6">{{ cvData.about.title }}</h2>
      <p class="text-gray-700 text-lg leading-relaxed">{{ cvData.about.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import cvData from '@/data/cv.json'
</script>
